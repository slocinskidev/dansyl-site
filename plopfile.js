// eslint-disable-next-line import/no-extraneous-dependencies
const toKebabCase = require('lodash/kebabCase');

module.exports = (plop) => {
  plop.setGenerator('component', {
    description: 'Add component',
    prompts: [
      {
        type: 'list',
        name: 'directory',
        message: 'Please choose a directory',
        choices: ['commons', 'layouts', 'templates', 'create a new one'],
      },
      {
        type: 'input',
        name: 'newDirectory',
        message: 'Please enter a directory name',
        when: (answers) => answers.directory === 'create a new one',
      },
      {
        type: 'input',
        name: 'name',
        message: 'Please enter component name',
      },
      {
        type: 'list',
        name: 'test',
        message: 'Do you want to create test file?',
        choices: ['yes', 'no'],
      },
    ],
    actions: (data) => {
      const directoryName = toKebabCase(data?.newDirectory ? data.newDirectory : data?.directory);

      const actionsList = [
        {
          type: 'add',
          path: `src/components/${directoryName}/{{kebabCase name}}/{{kebabCase name}}.tsx`,
          templateFile: 'plop/components/component.hbs',
        },
        {
          type: 'add',
          path: `src/components/${directoryName}/{{kebabCase name}}/index.ts`,
          templateFile: 'plop/components/index.hbs',
        },
      ];

      if (data.test === 'yes') {
        actionsList.push({
          type: 'add',
          path: `src/components/${directoryName}/{{kebabCase name}}/__tests__/{{kebabCase name}}.test.tsx`,
          templateFile: 'plop/components/test.hbs',
        });
      }

      return actionsList;
    },
  });
};
