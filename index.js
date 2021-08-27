// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'github',
        message: 'What is your github username?'
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What type of license are you using?',
        choices: ['MIT', '']
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is description of your project?'
    },
    {
        type: 'input',
        name: 'install',
        message: 'Install Instructions?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the usage of your application?'
    },
    {
        type: 'input',
        name: 'credits',
        message: 'Did you collaborate on this project or use other resources list the links here.'
    },
    {
        type: 'input',
        name: 'test',
        message: 'Have you run tests, if so provide how to run them.'
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
   fs.writeFile('README.md', generateMarkdown(data), (err)) 
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions).then(generateMarkdown(data))
}

// Function call to initialize app
init();
