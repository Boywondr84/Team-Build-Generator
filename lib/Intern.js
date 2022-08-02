const Employee = require("./Employee");
class Intern extends Employee {

constructor(name, email, id, school) {
    super(name, email, id)
    this.school = school;
}
// return role
getRole() {
    return 'Intern';
};

// return school
getSchool() {
    return this.school;
};
}

module.exports = Intern;

// functions:
// getSchool()