const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, email, id, github) {
    super(name, email, id);
    this.github = github;
}

// return role
getRole() {
    return 'Engineer';
};

// return Github account
getGithub() {
    return `https://github.com/this.github`;
};
}

module.exports = Engineer;