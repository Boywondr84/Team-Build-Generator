const inquirer = require("inquirer");
const fs = require("fs");
const { writeFile } = require("./lib/generateBuild.js");
const generateBuild = require("./lib/generateBuild");

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
            name: "ID",
            message: "Enter your ID number. (Required)",
            validate: idInput => {
                if (idInput === '25') {
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
                if (officeInput === '100') {
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
        //             promptEngineer();
        //         } else {
        //             //promptIntern();
        //         }
        //     }
        // }
    ])
        .then((managerData) => {
            console.log(managerData.name);
        })
        .catch((error) => {
            console.log(error);
        })        
};

// const promptEngineer = teamData => {
//     console.log("Adding an engineer to team.")
// };

// // if (!teamData.members) {
// //     teamData.members = [];
// // }

// return inquirer.prompt([
//     {
//         type: "input",
//         name: "Engineer's Name",
//         message: "Enter Engineer's name.",
//     },
//     {
//         type: "input",
//         name: "ID",
//         message: "Enter your ID number. (Required)",
//         validate: idInput => {
//             if (idInput === '10') {
//                 return true;
//             } else {
//                 console.log('Invalid ID');
//                 return false;
//             }
//         }
//     },
//     {
//         type: "input",
//         name: "email",
//         message: "What is your e-mail address? (Required)",
//         validate: emailInput => {
//             if (emailInput) {
//                 return true;
//             } else {
//                 console.log('Invalid e-mail');
//                 return false;
//             }
//         }
//     },
//     {
//         type: "input",
//         name: "GitHub Name",
//         message: "What is your GitHub Account Name? (Required)",
//         validate: githubInput => {
//             if (githubInput) {
//                 return true;
//             } else {
//                 console.log('Please enter a GitHub username');
//                 return false;
//             }
//         }
//     }
// ])
//     .then(teamData => {
//         teamData.members.push(teamData);
//         console.log(teamData);
//         return promptEngineer(teamData);
//     })

promptUser()
    .then(managerData => {
        return writeToFile("index.html", generateBuild(managerData));
    });

function writeToFile(fileName, data) {
    fs.writeFileSync(path.join(process.cwd(), fileName), data, function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log("Success");
        }
    })
};