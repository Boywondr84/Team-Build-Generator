const Employee = require("./Employee");
class Intern extends Employee {

constructor(name, email, id) {
    super(name, email, id)
    this.name = 'Michelle';
    this.email = `${this.name}`.toLowerCase() +"@email.com";
}

// return role
getRole() {
    return 'Intern';
};

}

module.exports = Intern;

// functions:
// getSchool()