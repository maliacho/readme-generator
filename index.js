// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const markdown = require('./utils/generateMarkdown.js');
const { error } = require('console');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'Please enter the name of your project:',
        name: 'nameInput',
    },
    {
        type: 'input',
        message: 'Please enter a short description about your project:',
        name: 'descriptionInput',
    },
    {
        type : 'input',
        message : 'Please enter the technologies used:',
        name : 'technologiesInput',
    },
    {
        type: 'input',
        message: 'Please enter installation instructions (if applicable):',
        name: 'installationInput',
    },
    {
        type: 'input',
        message: 'Please enter the names of your collaborators (if applicable):',
        name: 'creditsInput',
    },
    {
        type: 'checkbox',
        message: 'Please select a license:',
        name: 'licenseInput',
        choices: [
            'Academic Free License v3.0',	
            'Apache license 2.0',	
            'Artistic license 2.0',	
            'Boost Software License 1.0',	
            'BSD 2 - clause "Simplified" license',
            'BSD 3 - clause "New" or "Revised" license',
            'BSD 3 - clause Clear license',
            'BSD 4 - clause "Original" or "Old" license',
            'BSD Zero - Clause license',
            'Creative Commons license family',
            'Creative Commons Zero v1.0 Universal',
            'Creative Commons Attribution 4.0',
            'Creative Commons Attribution ShareAlike 4.0',
            'Do What The F * ck You Want To Public License',
            'Educational Community License v2.0',
            'Eclipse Public License 1.0',
            'Eclipse Public License 2.0',
            'European Union Public License 1.1',
            'GNU Affero General Public License v3.0',
            'GNU General Public License family',
            'GNU General Public License v2.0',
            'GNU General Public License v3.0',
            'GNU Lesser General Public License family',
            'GNU Lesser General Public License v2.1',
            'GNU Lesser General Public License v3.0',
            'ISC',
            'LaTeX Project Public License v1.3c',
            'Microsoft Public License',
            'MIT',
            'Mozilla Public License 2.0',
            'Open Software License 3.0',
            'PostgreSQL License',
            'SIL Open Font License 1.1',
            'University of Illinois / NCSA Open Source License',
            'The Unlicense',
            'zLib License',
        ]
    }
];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}
//     fs.appendFile(`README.md`, markdown(data), (err) => {
//         err ? console.error(err) : console.log(`README.md has been created.`)
//     } )

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        // let fileName= ;
        // let data = ;
        .then(writeToFile(fileName, data))
};

// Function call to initialize app
init();
