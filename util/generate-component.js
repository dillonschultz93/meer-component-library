/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */
require('colors');
const fs = require('fs');
const changeCase = require('change-case');
const templates = require('./templates/index.js');

const componentName = changeCase.paramCase(process.argv[2]);

if (!componentName) {
  console.error('Please supply a component name'.red);
  process.exit(1);
}

console.log(`Creating component templates with the name: ${componentName}`);

const componentDirectory = `./src/components/${componentName}.js`;
const testDirectory = `./test/${componentName}.test.js`;
const storyDirectory = `./stories/${componentName}.stories.md`;

if (
  fs.existsSync(componentDirectory)
  || fs.existsSync(testDirectory)
  || fs.existsSync(storyDirectory)
) {
  console.error(`The component, ${componentName}, already exists`.red);
  process.exit(1);
}

const generatedTemplates = templates.map(template => template(componentName));

generatedTemplates.forEach((template) => {
  fs.writeFileSync(`./${template.location}${componentName}${template.extension}`, template.content);
});

console.log(`Done! Created a ${componentName} file, a storybook file, and a test file.`.green);
