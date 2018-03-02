import Handlebars from 'handlebars';
import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

function schemaInjectParametersHelper(socketObject, parameters, options) {}

function parametersHelper(socketObject, parameters, options) {
  let out = '';
  for (const key of Object.keys(parameters)) {
    out += options.fn(parameters[key], {data: {key}});
  }
  return out;
}

function schemaInjectParametersIndexHelper(socketObject, parameters, options) {}

function parametersIndexHelper(socketObject, parameters, options) {
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
    return (opts.use_schema ? schemaInjectParametersHelper : parametersHelper)(
      socketObject,
      parameters,
      options
    );
  });
  Handlebars.registerHelper('parameters-index', (parameters, options) => {
    return (opts.use_schema
      ? schemaInjectParametersIndexHelper
      : parametersIndexHelper)(socketObject, parameters, options);
  });
  Handlebars.registerHelper('reference-type', (a, options) => {
    if (a === 'reference' || a === 'relation') {
      return options.fn(a);
    }
    return options.inverse(this);
  });
}

export function registerPartials(searchPath, opts = {}) {
  for (const f of fs.readdirSync(searchPath)) {
    if (!f.endsWith('.hbs')) {
      continue;
    }
    Handlebars.registerPartial(
      f.substring(0, f.length - 4),
      fs.readFileSync(path.join(searchPath, f)).toString()
    );
  }
}

export function generateMD(opts) {
  makeSocketHelpers(
    yaml.safeLoad(fs.readFileSync('./socket.yml').toString()),
    opts
  );
  registerPartials(path.join(__dirname, 'partials'), opts);
  const body = opts.template || '{{>main}}';
  const template = Handlebars.compile(body);
  return template({});
}
