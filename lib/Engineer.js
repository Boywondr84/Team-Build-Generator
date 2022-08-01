const Employee = require("./Employee");
class Engineer extends Employee {

constructor(name, email, id) {
    super(name, email, id)
    this.name = name;
    this.email = email+ "@email.com";
    this.github = `https://github.com/${this.name}` + "2022";
}

// return role
getRole() {
    return 'Engineer';
};
}

module.exports = Engineer;