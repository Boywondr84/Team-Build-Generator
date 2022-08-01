const Employee = require("./Employee")
class Manager extends Employee {
    
    constructor(name, email, id, office) {
        super(name, email, id)
        this.name = name;
        this.email = email + "@email.com";
        this.id = id;
        this.office = office;
    }

// return role
getRole() {
    return 'Manager';
};

// return office number
getOffice() {
    return `Office #: ${this.office}`;
};
}


module.exports = Manager;