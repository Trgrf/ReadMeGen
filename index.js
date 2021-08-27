// TODO: Include packages needed for this application
const fs = require('fs');
const path = require('path');
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
        choices: ['MIT', 'Apache 2.0', 'GPL', 'None']
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is description the of your project?',
        default: "No Description Given"
    },
    {
        type: 'input',
        name: 'install',
        message: 'Install Instructions?',
        default: "No Install Instructions Given"
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the usage of your application?',
        default: "No Usage Given"
    },
    {
        type: 'input',
        name: 'credits',
        message: 'Did you collaborate on this project or use other resources list the links here.',
        default: "No Credits Given"
    },
    {
        type: 'input',
        name: 'test',
        message: 'Have you run tests, if so provide how to run them.',
        default: "No Test Given"
    },
];

// TODO: Create a function to write README file
function writeToFile(data) {
   return fs.writeFileSync(path.join(__dirname,'README.md'), data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions).then(answers => writeToFile(generateMarkdown(answers)))
}

// Function call to initialize app
init();
