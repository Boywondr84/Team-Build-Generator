// parent class

module.exports = function() {
    this.name = 'Ryan';
    this.id = Math.floor(Math.random() * 10 + 42 * 100);
    this.email = this.name + '@email.com';
};

// functions:
// getName()
// getId()
// getEmail()
// getRole()