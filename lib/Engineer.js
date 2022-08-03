const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, email, id, github) {
        super(name, email, id);
        this.github = `http://github.com/` + github;
    }

    // return role
    getRole() {
        return 'Engineer';
    }

    // return Github account
    getGithub() {
        return this.github;
    }
}

module.exports = Engineer;