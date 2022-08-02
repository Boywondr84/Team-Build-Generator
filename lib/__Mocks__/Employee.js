// parent class

class Employee {
    constructor(name, email, id) {
        this.name = name;
        this.email = email;
        this.id = id;
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
        return "ID: " + this.id 
    }
}

module.exports = Employee;