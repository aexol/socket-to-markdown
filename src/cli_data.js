const definitions = [
  {
    name: 'template',
    alias: 't',
    type: String,
    typeLabel: '<file>',
    description:
      'A custom handlebars template file to insert documentation into. The default template is `{{>main}}`.'
  },
  {
    name: 'help',
    description: 'Print usage information',
    alias: 'h',
    type: Boolean
  },
  {
    name: 'version',
    type: Boolean
  },
  {
    name: 'partial',
    type: String,
    typeLabel: '[underline]{file} ...',
    multiple: true,
    description:
      'Addition partial templates. File name becomes partial name. Overrides build-in partials on name conflict.'
  },
  {
    name: 'helper',
    type: String,
    typeLabel: '[underline]{file} ...',
    multiple: true,
    description:
      'Add extra helper to parsing. Helper name is same as file name.'
  },
  {
    name: 'use-schema',
    type: Boolean,
    description: 'Enable schema JSONSchema parsing.'
  },
  {
    name: 'concat-source',
    type: Boolean,
    description:
      'Replace each $source key in socket with src/${source} contents.'
  },
  {
    name: 'socket-file',
    type: String,
    description: 'Socket file path. By default ./socket.yml'
  }
];
module.exports = {
  definitions: definitions,
  usageSections: [
    {
      header: 'socket-to-markdown',
      content: 'Generates markdown documentation from socket.yml.'
    },
    {
      header: 'Synopsis',
      content: [
        {
          cmmd: '$ socket2md <options>'
        }
      ]
    },
    {
      header: 'Options',
      content: 'Generation options.',
      optionList: definitions
    }
  ]
};
