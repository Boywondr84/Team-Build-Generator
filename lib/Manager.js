const Employee = require("./Employee")
class Manager extends Employee {
    
    constructor(name, email, id, officeNumber) {
        super(name, email, id)

    this.office = officeNumber;
    }


// return role
getRole() {
    return 'Manager';
};

// return id
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