const inquirer = require("inquirer");
const fs = require("fs");
const { writeFile } = require("./lib/generate-build.js");
const generateBuild = require("./lib/generate-build");

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
        {
            type: "checkbox",
            name: "team",
            message: "Add members to your team?",
            choices: ['Engineer', 'Intern', 'none'],
            validate: teamAdd => {
                if (teamAdd === 'none') {
                    generateHTML();
                } else if (teamAdd === 'Engineer') {
                    //promptEngineer();
                } else {
                    //promptIntern();
                }
            }
        }
    ]);
};

promptUser()
// return generateBuild();
//     .then(generateHTML => {
//         return writeFile(generateHTML);
//     });
