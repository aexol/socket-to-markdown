import Handlebars from 'handlebars';
import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';
import merge from 'lodash.merge';
import has from 'lodash.has';
import get from 'lodash.get';
import unset from 'lodash.unset';
import parser from './parsers';

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
  Handlebars.registerHelper('details', (prop, options) => {
    // Object or array?
    if (prop.properties || prop.items) {
      return options.fn(prop);
    }
    return options.inverse(prop);
  });
  Handlebars.registerHelper('reference-type', (a, options) => {
    if (a === 'reference' || a === 'relation') {
      return options.fn(a);
    }
    return options.inverse(this);
  });
  Handlebars.registerHelper('required', (required, prop, options) => {
    let req = required;
    if (required && !Array.isArray(required)) {
      req = [];
      for (const k of Object.keys(required)) {
        req.push(required[k]);
      }
    }
    return req && typeof req.find(v => v === prop) !== 'undefined'
      ? 'Yes'
      : 'No';
  });
  const getHelperName = h => h.substring(0, h.length - 3);
  const isAbs = p => p[0] === '/';
  const isRelative = p => p.substr(0, 3) === '../' || p.substr(0, 2) === './';
  const prependCur = p => !isAbs(p) && !isRelative(p);
  if (opts.helper) {
    for (const i of Object.keys(opts.helper)) {
      const helper = prependCur(opts.helper[i])
        ? `${process.cwd()}/${opts.helper[i]}`
        : opts.helper[i];
      Handlebars.registerHelper(
        getHelperName(path.basename(helper)),
        require(helper)
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

export function readInSocketYaml(opts = {}) {
  let socketYml = loadYamlFile(opts.socketFile || './socket.yml');
  return parser(socketYml, opts);
}

export function generateMD(opts) {
  return readInSocketYaml(opts).then(socket => {
    makeSocketHelpers(socket, opts);
    registerPartials(path.join(__dirname, 'partials'), opts);
    const body = opts.template || '{{>main}}';
    const template = Handlebars.compile(body);
    return template(socket);
  });
}
