const Employee = require("./Employee");
class Engineer extends Employee {

constructor(name, email, id) {
    super(name, email, id)
    this.name = 'Frank';
    this.email = `${this.name}`.toLowerCase() +"@email.com";
    this.id = Math.floor(Math.random() * 10 + 42 * 100);
    this.github = `https://github.com/${this.name}` + "2022";
}

// return role
getRole() {
    return 'Engineer';
};
}

module.exports = Engineer;