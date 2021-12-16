const Employee = require('./employee');

class Engineer extends Employee {
  constructor(name, id, github, email) {
    super(name, id, email);
    this.github = github;
  }
  getRole() {
    return "Engineer";
  }
  getGithub() {
    return this.github;
  }
};

module.exports = Engineer;