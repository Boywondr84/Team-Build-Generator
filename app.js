const inquirer = require("inquirer");
const fs = require("fs");
const pageTemplate = require("./src/page-template.js");
const path = require("path");
var teamArray = [];
var Manager = require("./lib/Manager");
var Engineer = require("./lib/Engineer");
var Intern = require("./lib/Intern");

// question prompts
const promptUser = () => {

    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the Team Manager's name?"
        },
        {
            type: "input",
            name: "id",
            message: "Enter your ID number. (Required)",
            validate: idInput => {
                if (idInput == "1") {
                    return true;
                } else {
                    console.log('Invalid ID');
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "email",
            message: "What is your e-mail address? (Required)",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Invalid e-mail');
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "office",
            message: "What is the Team Manager's office number? (Required)",
            validate: officeInput => {
                if (officeInput === "100") {
                    return true;
                } else {
                    console.log('Incorrect Office Number!');
                    return false;
                }
            }
        },
    ])
        .then((managerData) => {
            var manager = new Manager(managerData.name, managerData.email, managerData.id, managerData.office);
            teamArray.push(manager);
            addEmployee();
        })
        .catch((error) => {
            console.log(error);
        })
};

function addEmployee() {
    inquirer.prompt({
        type: "list",
        name: "Employee",
        message: "What type of employee to add?",
        choices: ['Engineer', 'Intern', 'Manager', 'none']
    })
        .then((response) => {
            if (response.Employee === 'none') {
                return writeToFile('./index.html', pageTemplate(teamArray));
            } else if (response.Employee == 'Engineer') {
                function addEngineer() {
                    return inquirer.prompt([
                        {
                            type: "input",
                            name: "name",
                            message: "What is the engineer's name?"
                        },
                        {
                            type: "input",
                            name: "id",
                            message: "Enter your ID number. (Required)",
                            validate: idInput => {
                                if (idInput === "2") {
                                    return true;
                                } else {
                                    console.log('Invalid ID');
                                    return false;
                                }
                            }
                        },
                        {
                            type: "input",
                            name: "email",
                            message: "What is your e-mail address? (Required)",
                            validate: emailInput => {
                                if (emailInput) {
                                    return true;
                                } else {
                                    console.log('Invalid e-mail');
                                    return false;
                                }
                            }
                        },
                        {
                            type: "input",
                            name: "github",
                            message: "What is your GitHub Account Name? (Required)",
                            validate: githubInput => {
                                if (githubInput) {
                                    return true;
                                } else {
                                    console.log('Please enter a GitHub username');
                                    return false;
                                } 
                            }
                        },
                    ])
                };
                addEngineer()
                    .then((engineerData) => {
                        var engineer = new Engineer(engineerData.name, engineerData.id, engineerData.email, engineerData.github);
                        teamArray.push(engineer);
                        addEmployee();
                    })
                    .catch((error) => {
                        console.log(error);
                    })
            } else {
                function addIntern() {
                    return inquirer.prompt([
                        {
                            type: "input",
                            name: "name",
                            message: "What is your name?"
                        },
                        {
                            type: "input",
                            name: "id",
                            message: "Enter your ID number. (Required)",
                            validate: idInput => {
                                if (idInput === "3") {
                                    return true;
                                } else {
                                    console.log('Invalid ID');
                                    return false;
                                }
                            }
                        },
                        {
                            type: "input",
                            name: "email",
                            message: "What is your e-mail address? (Required)",
                            validate: emailInput => {
                                if (emailInput) {
                                    return true;
                                } else {
                                    console.log('Invalid e-mail');
                                    return false;
                                }
                            }
                        },
                        {
                            type: "input",
                            name: "school",
                            message: "Where do you attend school?"
                        }
                    ])
                };
                addIntern()
                    .then((internData) => {
                        var intern = new Intern(internData.name, internData.id, internData.email, internData.school);
                        teamArray.push(intern);
                        addEmployee();
                    })
                    .catch((error) => {
                        console.log(error);
                    })
            }
        })
};
promptUser()
    // .then(employeeData => {
        // console.log("THis is employee data");
        // const htmlString = pageTemplate(employeeData);
        // return writeToFile("./dist/index.html", htmlString);
        // console.log(employeeData);
    // })

    // .then(writeFileResponse => {
    //     console.log(writeFileResponse);
    //     return fs.copyFile();
    // })
    // .then(copyFileRespone => {
    //     console.log(copyFileRespone);
    // // })
    // .catch(err => {
    //     console.log(err);
    // });

function writeToFile(fileName, data) {
    fs.writeFileSync(path.join(process.cwd(), fileName), data, function (err) {
        console.log('Hello')
        if (err) {
            console.log("This is an error");
            return;
        }
            console.log("Success");
        
    });
};

// path.join(process.cwd() line 219, first parameter