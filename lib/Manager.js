const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, email, id) {
        super(name)
        this.name = name;
        this.email = email;
        this.id = id;
    }

    // return role
    getRole() {
        return 'Manager';
    }

    // return office number
    getOffice() {
        return this.office;
    }
}


module.exports = Manager;