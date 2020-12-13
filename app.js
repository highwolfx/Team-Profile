const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const allEmployees = [];
const idArray = [];


function addMembers(answers){
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the employee's name?",
            validate: answer => {
                if (answer === '') {
                    return "Please fill in a valid name."
                } else {
                    return true;
                };
            }
        },
        {
            type: 'list',
            name: 'position',
            message: 'What is the position of the employee?',
            choices: ['Manager', 'Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the employee's ID number?",
            validate: answer => {
                if (idArray.includes(answer)) {
                    return "This ID is already taken. Please enter a different number.";
                } else if ((answer === '')){
                    return 'Please enter a valid ID.'
                } else {
                    return true;
                }
            }
        },
        {
            type: 'text',
            name: 'email',
            message: "What is the employee's email address?",
            validate: answer => {
                if (answer === '') {
                    return 'Please enter a valid email.'
                } else {
                    return true;
                };
            }
        }
    ]).then( response => {
        switch (response.position){
            case 'Manager':
                inquirer.prompt([
                    {
                        type: 'input',
                        name: 'officeNumber',
                        message: 'What is their office number?',
                        validate: answer => {
                            if (answer === '') {
                                return 'Please fill enter valid office number.'
                            } else {
                                return true;
                            };
                        }
                    }
                ]).then( res => {
                    let newMember = new Manager(response.name, response.position, response.id, response.email, res.officeNumber);
                    // console.log(newMember);
                    allEmployees.push(newMember);
                    idArray.push(response.id);
                    addMoreMembers();
                });
                break;
            case 'Engineer':
                inquirer.prompt([
                    {
                        type: 'input',
                        name: 'github',
                        message: 'What is their GitHub username?',
                        validate: answer => {
                            if (answer === '') {
                                return 'Please enter a valid GitHub username.'
                            } else {
                                return true;
                            };
                        }
                    }
                ]).then(res => {
                    let newMember= new Engineer(response.name, response.position, response.id, response.email, res.github);
                    // console.log(newMember);
                    allEmployees.push(newMember);
                    idArray.push(response.id);
                    addMoreMembers();
                });
                break;
            case 'Intern':
                inquirer.prompt([
                    {
                        type: 'input',
                        name: 'school',
                        message: 'What school do they attend?',
                        validate: answer => {
                            if (answer === '') {
                                return 'Please enter a valid school name.'
                            } else {
                                return true;
                            };
                        }
                    }
                ]).then(res => {
                    let newMember = new Intern(response.name, response.position, response.id, response.email, res.school);
                    // console.log(newMember);
                    allEmployees.push(newMember);
                    idArray.push(response.id);
                    addMoreMembers();
                });
                break;
            
        }
    })
};

function addMoreMembers(){
    inquirer.prompt([
        {
            type:'list',
            name: 'addMore',
            message: 'Would you like to add more employees?',
            choices: ['Yes', 'No']
        }
    ]).then( response => {
        if (response.addMore === 'Yes'){
            addMembers();
        } else if (response.addMore === 'No'){
            render(allEmployees);
        };
    });
};

addMembers();