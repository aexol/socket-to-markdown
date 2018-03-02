#!/usr/bin/env node
'use strict';
const tool = require('command-line-tool');
const version = require('../package').version;

const cli = parseCommandLine();
let options = cli.options;
options = loadStoredConfig(options);

/* socket2md --help */
if (options.help) {
  tool.printOutput(cli.usage);
  /* socket2md --version */
} else if (options.version) {
  tool.printOutput(version);
} else {
  const socket2md = require('../');
  if (options.template) {
    options.template = require('fs')
      .readFileSync(options.template)
      .toString();
  }
  console.log(socket2md.generateMD(options));
}
function loadStoredConfig(options) {
  const loadConfig = require('config-master');
  const socket2mdConfig = loadConfig('socket2md');
  return Object.assign(socket2mdConfig, options);
}

function parseCommandLine() {
  const cliData = require('../lib/cli_data');
  try {
    return tool.getCli(cliData.definitions, cliData.usageSections);
  } catch (err) {
    handleError(err);
  }
}

function handleError(err) {
  tool.halt(err.toString());
}
