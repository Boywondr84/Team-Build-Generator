// parent class

class Employee {
    constructor(name, id, email) {
    this.name = 'Ryan';
    this.id = Math.floor(Math.random() * 10 + 42 * 100);
    this.email = `${this.name}`.toLowerCase() +"@email.com";
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


// return Github account:
getGithub() {
    return `https://github.com/${this.name}` + "2022";            
};
}

// functions:
// getName()
// getId()
// getEmail()
// getRole()

module.exports = Employee;