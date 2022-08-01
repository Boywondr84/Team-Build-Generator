const Employee = require("./Employee")
class Manager extends Employee {
    
    constructor(name, email, id, officeNumber) {
        super(name, email, id)
        this.name = name;
        this.email = `${this.name}`.toLowerCase() +"@email.com";
        // this.id = Math.floor(Math.random() * 10 + 42 * 100);
        this.office = officeNumber = Math.floor(Math.random() * 10 + 17 * 10);
    }

// return role
getRole() {
    return 'Manager';
};

// return office number

}

// functions:
// getName()
// getId()
// getEmail()
// getRole()

module.exports = Manager;