class Employee {
    constructor(name, email, id) {
        this.name = name;
        this.email = email;
        this.id = id;
    }

    // returns name
    getName() {
        return `${this.name}`;
    }

    // return email
    getEmail() {
        return this.email + "@email.com";
    }

    // return role
    getRole() {
        return 'Employee';
    }

    // return id
    getId() {
        return "ID:" + this.id 
    }

    // return Github account:
    // getGithub() {
    //     return `https://github.com/${this.github}`;
    // };

    // return school name:
    getSchool() {
        return 'NYU';
    }

    // return office number:
    getOffice() {
        return Math.floor(Math.random() * 10 + 17 * 10);
    }
}

module.exports = Employee;