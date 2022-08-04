// parent class

class Employee {
    constructor(name, email, id) {
        this.name = "Ryan";
        this.email = "ryandrums";
        this.id = 1;
    }
    // returns name
    getName() {
        return this.name;
    }

    // return email
    getEmail() {
        return this.email + "@email.com";
    }

    // return role
    getRole() {
        return 'Employee';
    }

    // return id
    getId() {
        return "ID: " + this.id;
    }
}

module.exports = Employee;