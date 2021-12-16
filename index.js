// node modules
const inquirer = require("inquirer");
const fs = require("fs");

// Instructor provided JS page-template
const template = require("./src/page-template.js")

// Array for team
const teamMates = [];

// Required JS files
const Employee = require("./lib/employee")
const Manager = require("./lib/manager")
const Engineer = require("./lib/engineer")
const Intern = require("./lib/intern")

// Questions and prompts for Manager
const addManager = () => {
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
        message: 'What is the manager\'s office number?',
        name: 'officeNumber',
      },
    ])
    .then((response) => {
      const manager = new Manager(
        response.name,
        response.id,
        response.email,
        response.officeNumber,
        "Manager",
      );
      teamMates.push(manager);
      addOneMore();
    })
}

// Desired role to be filled
const addOneMore = () => {
  inquirer
    .prompt([
      {
        type: "list",
        message: "What role would you like to add to your team?",
        name: "role",
        choices: [
          "Engineer",
          "Intern",
          "I don't want to add any other people to my team at this time.",
        ],
      },
    ])
    .then(function({ role }){
      if (role === "Engineer") addEngineer();
      else if (role === "Intern") addIntern();
      else writeFile();
    })
};

// Questions and prompts for Engineer
const addEngineer = () => {
  inquirer
    .prompt([
      {
        type: 'input',
        message: 'What is the engineer\'s name?',
        name: 'name',
      },
      {
        type: 'input',
        message: 'What is the engineer\'s id?',
        name: 'id',
      },
      {
        type: 'input',
        message: 'What is the engineer\'s GitHub username?',
        name: 'github',
      },
      {
        type: 'input',
        message: 'What is the engineer\'s email?',
        name: 'email',
      },
    ])
    .then((response) => {
      const engineer = new Engineer(
        response.name,
        response.id,
        response.github,
        response.email,
        "Engineer",
      );
      teamMates.push(engineer);
      addOneMore();
    })
}

// Questions and prompts for Intern
const addIntern = () => {
  inquirer
    .prompt([
      {
        type: 'input',
        message: 'What is the intern\'s name?',
        name: 'name',
      },
      {
        type: 'input',
        message: 'What is the intern\'s id?',
        name: 'id',
      },
      {
        type: 'input',
        message: 'What is the intern\'s email?',
        name: 'email',
      },
      {
        type: 'input',
        message: 'What is the intern\'s current school?',
        name: 'school',
      },
    ])
    .then((response) => {
      const intern = new Intern(
        response.name,
        response.id,
        response.email,
        response.school,
        "Intern",
      );
      teamMates.push(intern);
      addOneMore();
    })
}

// Writing file to team.html
const writeFile = str => {
  console.log(teamMates);
  fs.writeFile('./dist/team.html', template(teamMates), err => {
    if (err) {
      console.log(err);
      return;
    } else {
      console.log('Success! You have officially built your team. Congratulations!')
    }
  })
}
  
addManager()