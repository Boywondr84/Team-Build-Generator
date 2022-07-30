const inquirer = require("inquirer");
const fs = require("fs");
const generateBuild = require("./lib/generateBuild.js");
const path = require("path");
var teamArray = [];
var Manager = require("./lib/Manager");
var Engineer = require("./lib/Engineer");
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
                if (idInput == "25") {
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
                if (officeInput == "100") {
                    return true;
                } else {
                    console.log('Incorrect Office Number!');
                    return false;
                }
            }
        },
        // {
        //     type: "checkbox",
        //     name: "team",
        //     message: "Add members to your team?",
        //     choices: ['Engineer', 'Intern', 'none'],
        //     validate: teamAdd => {
        //         if (teamAdd == 'none') {
        //             return;
        //         } else if (teamAdd === 'Engineer') {
        //             console.log("Adding an engineer to team.")
        //             // } else {
        //             //     //promptIntern();
        //             // }
        //         }
        //     }
        // }

    ])
        .then((managerData) => {
            // console.log(managerData);
            var manager = new Manager(managerData.name, managerData.email, managerData.id, managerData.office);
            teamArray.push(manager);
            // console.log(teamArray);
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
            console.log(response);
            if (response.Employee == 'none') {
                return writeToFile('index.html', generateBuild(teamArray));
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
                                if (idInput == "2") {
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
                        console.log(engineerData.github);
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
                            name: "name"
                        },
                    ])
                };
                addIntern()
            }
        })
};
//     }
// ])
//     .then(teamData => {
//         teamData.members.push(teamData);
//         console.log(teamData);
//         return promptEngineer(teamData);
//     })

promptUser();

//     .then(managerData => {
//         return generateBuild(managerData);
//     });

function writeToFile(fileName, data) {
    fs.writeFileSync(path.join(process.cwd(), fileName), data, function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log("Success");
        }
    })
};