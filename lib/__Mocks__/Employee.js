// parent class

function Employee(name = "") {
    this.name = 'Ryan';
    // this.id = Math.floor(Math.random() * 10 + 42 * 100);
    // this.email = this.name + '@email.com';
};

// returns name
Employee.prototype.getName = function() {
    return `Welcome to our team, ${this.name}`;
};

// return email
Employee.prototype.getEmail = function() {
    return `${this.name}@email.com`;
};

// return role
Employee.prototype.getRole = function() {
    return 'Employee';
};


// functions:
// getName()
// getId()
// getEmail()
// getRole()

module.exports = Employee;