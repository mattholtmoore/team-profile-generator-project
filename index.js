// Required JS Files
const manager = require("./lib/Manager");
const engineer = require("./lib/Engineer");
const intern = require("./lib/Intern");

// node modules
const inquirer = require("inquirer");
const fs = require("fs");

// provided JS page template
const template = require("./src/page-template.js")

// Arrays
const teamMates = [];
const idArray = [];

// Questions and prompts
function addManager() {

  inquirer
    .prompt([
      {
        type: 'input',
        message: 'What is the manager\'s name?',
        name: 'name',
      },
      {
        type: 'input',
        message: 'What is the manager\'s id?',
        name: 'id',
      },
      {
        type: 'input',
        message: 'What is the manager\'s email?',
        name: 'email',
      },
      {
        type: 'input',
        message: 'What is the manager\'s phone number?',
        name: 'number',
      },
    ])
    .then((response) => {
      const manager = new Manager(
        response.name,
        response.id,
        response.email,
        response.number,
      );
      teamMates.push(manager);
      idArray.push(answers.id);
      addOneMore();

    })
  
}

