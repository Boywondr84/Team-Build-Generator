// parent class

class Employee {
    constructor(name, id, email) {
    this.name = 'Ryan';
    this.id = Math.floor(Math.random() * 10 + 42 * 100);
    this.email = this.name + '@email.com';
    }
// returns name
getName() {
    return `Welcome to our team, ${this.name}`;
};

// return email
getEmail() {
    return `${this.name}@email.com`;
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