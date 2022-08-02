const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, email, id) {
    super(name)
    this.name = name;
    this.email = email;
    this.id = id;
}

// return role
getRole() {
    return 'Engineer';
};

// return Github account
getGithub() {
    return `https://github.com/${this.github}`;
};
}

module.exports = Engineer;