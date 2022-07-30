// parent class

class Employee {
    constructor(name, id, email) {
    this.name = 'Ryan';
    this.id = Math.floor(Math.random() * 10 + 42 * 100);
    this.email = `${this.name}`.toLowerCase() +"@email.com";
    }
// returns name
getName() {
    return `Welcome to our team, ${this.name}`;
};

// return email
getEmail() {
    return `E-mail: ${this.email}`;
};

// return role
getRole() {
    return 'Employee';
};

// return id
getId() {
    return `${this.id}`;
};
}

// functions:
// getName()
// getId()
// getEmail()
// getRole()

module.exports = Employee;