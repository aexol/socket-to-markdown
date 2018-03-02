import Handlebars from 'handlebars';
import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';
import merge from 'lodash.merge';
import has from 'lodash.has';
import get from 'lodash.get';
import unset from 'lodash.unset';

function schemaInjectParametersHelper(socketObject, parameters, options) {}

function parametersHelper(socketObject, parameters, options) {
  let out = '';
  for (const key of Object.keys(parameters)) {
    out += options.fn(parameters[key], {data: {key}});
  }
  return out;
}

function schemaInjectParametersTableHelper(socketObject, parameters, options) {}

function parametersTableHelper(socketObject, parameters, options) {
  let out = '| Name | Type | Required |\n';
  out += '|------|------|--------|\n';
  for (const key of Object.keys(parameters)) {
    const type = parameters[key].type || 'any';
    const required = parameters[key].required ? 'Yes' : 'No';
    out += `| ${key} | ${type} | ${required} |\n`;
  }
  return out;
}

export function makeSocketHelpers(socketObject, opts = {}) {
  Handlebars.registerHelper('socket', options => {
    return options.fn(socketObject);
  });
  Handlebars.registerHelper('classes', options => {
    return options.fn(socketObject.classes);
  });
  Handlebars.registerHelper('config', options => {
    return options.fn(socketObject.config);
  });
  Handlebars.registerHelper('endpoints', options => {
    return options.fn(socketObject.endpoints);
  });
  Handlebars.registerHelper('events', options => {
    return options.fn(socketObject.events);
  });
  Handlebars.registerHelper('parameters', (parameters, options) => {
    return (opts.useSchema ? schemaInjectParametersHelper : parametersHelper)(
      socketObject,
      parameters,
      options
    );
  });
  Handlebars.registerHelper('parameters-table', (parameters, options) => {
    return (opts.useSchema
      ? schemaInjectParametersTableHelper
      : parametersTableHelper)(socketObject, parameters, options);
  });
  Handlebars.registerHelper('reference-type', (a, options) => {
    if (a === 'reference' || a === 'relation') {
      return options.fn(a);
    }
    return options.inverse(this);
  });
  const getHelperName = h => pFn.substring(0, pFn.length - 3);
  if (opts.helper) {
    for (const i of Object.keys(opts.helper)) {
      Handlebars.registerHelper(
        getHelperName(path.basename(opts.helper[i])),
        require(opts.helper[i])
      );
    }
  }
}

export function registerPartial(fn) {
  const partialName = (pFn => pFn.substring(0, pFn.length - 4))(
    path.basename(fn)
  );
  if (!fn.endsWith('.hbs')) {
    return;
  }

  Handlebars.registerPartial(partialName, fs.readFileSync(fn).toString());
}
export function registerPartials(searchPath, opts = {}) {
  for (const f of fs.readdirSync(searchPath)) {
    registerPartial(path.join(searchPath, f));
  }
  if (opts.partial) {
    for (const i of Object.keys(opts.partial)) {
      registerPartial(opts.partial[i]);
    }
  }
}

function loadYamlFile(fn) {
  return yaml.safeLoad(fs.readFileSync(fn).toString());
}

function interpolateDeep(o, opts = {}) {
  if (!o || typeof o !== 'object') {
    return o;
  }
  Object.keys(o).forEach(k => {
    o = merge(o, {[k]: interpolateDeep(o[k], opts)});
  });
  const key = '$source';
  const keepKey = opts.keepKey || false;
  if (has(o, key)) {
    const value = get(o, key);
    if (!keepKey) {
      unset(o, key);
    }
    const extraYaml = loadYamlFile(path.join('./src', value));
    o = merge(o, extraYaml);
  }
  return o;
}

export function readInSocketYaml(opts = {}) {
  let socketYml = loadYamlFile(opts.socketFile || './socket.yml');
  if (opts.concatSource) {
    socketYml = interpolateDeep(socketYml, opts);
  }
  return socketYml;
}

export function generateMD(opts) {
  makeSocketHelpers(readInSocketYaml(opts), opts);
  registerPartials(path.join(__dirname, 'partials'), opts);
  const body = opts.template || '{{>main}}';
  const template = Handlebars.compile(body);
  return template({});
}
