const Employee = require("./Employee");
class Intern extends Employee {

constructor(name, email, id, github) {
    super(name, email, id)
    this.name = 'Michelle';
    this.email = `${this.name}`.toLowerCase() +"@email.com";
    this.id = Math.floor(Math.random() * 10 + 42 * 100);
    this.github = `https://github.com/${this.name}` + "2022";
}
// return role
getRole() {
    return 'Intern';
};
}

module.exports = Intern;

// functions:
// getSchool()