const Employee = require("./Employee");
class Intern extends Employee {

constructor(name, email, id) {
    super(name, email, id)
    this.name = 'Michelle';
    this.email = `${this.name}`.toLowerCase() +"@email.com";
    // this.id = Math.floor(Math.random() * 10 + 42 * 3.14 + 1);
    this.school = `${this.school}`;
}
// return role
getRole() {
    return 'Intern';
};

// return school
getSchool() {
    return `${this.school}`;
};
}

module.exports = Intern;

// functions:
// getSchool()