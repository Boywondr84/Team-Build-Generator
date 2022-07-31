const Employee = require("./Employee");
class Intern extends Employee {

constructor(name, email, id) {
    super(name, email, id)
    this.name = 'Michelle';
    this.email = `${this.name}`.toLowerCase() +"@email.com";
    this.github = `https://github.com/${this.name}` + "2022";
}

// return role
getRole() {
    return 'Intern';
};

getGithub() {
    return `${this.github}`;
};

}

module.exports = Intern;

// functions:
// getSchool()