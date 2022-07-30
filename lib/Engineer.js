const Employee = require("./Employee");
class Engineer extends Employee {

constructor(name, email, id) {
    super(name, email, id)
    this.name = 'Frank';
    // this.email = this.name + '@email.com';
    // this.github = github ='https://github.com/' + this.github;
}

// return role
getRole() {
    return 'Engineer';
};

// // return Github
// getGithub() {
//     return `${this.github}`;
// };
}

module.exports = Engineer;

// functions:
// getGithub()