const Employee = require("./Employee");
class Intern extends Employee {

constructor(name, email, id) {
    super(name, email)
    this.name = name;
    this.email = email;
    this.id = id;
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