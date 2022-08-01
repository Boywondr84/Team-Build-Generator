const Employee = require("./Employee");
class Intern extends Employee {

constructor(name, email, id) {
    super(name, email, id)
    this.name = name;
    this.email = email+ "@email.com";
    this.school = 'Brown University';
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