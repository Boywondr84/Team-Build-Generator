const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, email, id, office) {
        super(name, email, id)
        this.office = `Office # ` + office;
    }

    // return role
    getRole() {
        return 'Manager';
    }

    // return office number
    getOfficeNumber() {
        return this.office;
    }
}


module.exports = Manager;