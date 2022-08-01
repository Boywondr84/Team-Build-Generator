// parent class

class Employee {
    constructor(name, email, id) {
    this.name = name = 'Ryan';
    this.email = email + "@email.com";
    this.id = id = Math.floor(Math.random() * 10 + 42 * 3.14 + 1);
    // this.office = office = Math.floor(Math.random() * 10 + 17 * 10);
    }
// returns name
getName() {
    return `${this.name}`;
};

// return email
getEmail() {
    return `${this.email}`;
};

// return role
getRole() {
    return 'Employee';
};

// return id
getId() {
    return `ID: ${this.id}`;
};

// return office number:
// getOffice() {
//     return `${this.office}`;
// }

// return Github account:
// getGithub() {
//     return `https://github.com/${this.github}` + "2022";            
// };

// return school name:
getSchool() {
    return 'NYU';
};
}

module.exports = Employee;