const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, email, id, office) {
        super(name, email, id)
        this.office = office;
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
console.log(Manager);

module.exports = Manager;