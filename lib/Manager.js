const Employee = require("./Employee")
class Manager extends Employee {
    
    constructor(name, email, id, officeNumber) {
        super(name, email, id)
        this.office = officeNumber = Math.floor(Math.random() * 10 + 17 * 10);
        this.email = `${this.name}`.toLowerCase() +"@email.com";
    }

// return role
getRole() {
    return 'Manager';
};

// return office number
getofficeNumber() {
    return `${this.office}`;
};
}

// functions:
// getName()
// getId()
// getEmail()
// getRole()

module.exports = Manager;