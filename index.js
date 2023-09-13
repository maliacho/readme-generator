// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type : 'input',
        message : 'Please enter the name of your project:',
        name : 'nameInput',
    },
    {
        type : 'input',
        message : 'Please enter a short description about your project:',
        name : 'descriptionInput',
    },
    {
        type : 'input',
        message : 'Please enter your table of contents (if applicable):',
        name : 'contentsInput',
    },
    {
        type : 'input',
        message : 'Please enter installation instructions (if applicable):',
        name : 'installationInput',
    },
    {
        type : 'input',
        message : 'Please enter the names of your collaborators (if applicable):',
        name : 'creditsInput',
    },
    {
        type : 'list',
        message : 'Please select a license:',
        name : 'licenseInput',
        choices: [
            'MIT',
            'Apache License 2.0',


        ]
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {

}

// Function call to initialize app
init();
