// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const promptProject = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'whats your name',
            validate: nameInput => {
                if(nameInput) {
                    return true;
                }
                else {
                    console.log('please enter your name');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'whats your github account',
            validate: githubInput => {
                if(githubInput) {
                    return true;
                }
                else {
                    console.log('please enter your github account');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'whats your email address',
            validate: emailInput => {
                if(emailInput) {
                    return true;
                }
                else {
                    console.log('please enter your email address');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'title',
            message: 'what is the title of your project',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                }
                else {
                    console.log('please enter your project title');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'add a brief description of your project',
        },
        {
            type: 'checkbox',
            name: 'languages',
            message: 'what languages did you use for this project',
            choices: ['js', 'html', 'css', 'es6', 'node', 'jquery', 'bootstrap']
        },
        {
            type: 'input',
            name: 'link',
            message: 'enter the url to your project',
            validate: linkInput => {
                if (linkInput) {
                    return true;
                }
                else {
                    console.log('please enter your project url');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'contributorName',
            message: 'please add any contributors'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'how do you install your app',
        },
        {
            type: 'list',
            name: 'license',
            message: 'what license do you choose for this project',
            choices: ['MIT', 'GNU GPLv3', 'Apache License 2.0']
        }
    ]);
};



// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
 function init() {
    promptProject().then(async data => {
        var fileData = await generateMarkdown(data)
        console.log(fileData)
    });
}

// Function call to initialize app
init();
