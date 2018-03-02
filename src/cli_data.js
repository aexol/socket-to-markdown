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
