const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

var allEmployees = [];


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```



function addMembers(answers){
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the employee's name?"
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
            message: "What is the employee's ID number?"
        },
        {
            type: 'text',
            name: 'email',
            message: "What is the employee's email address?"
        }
    ]).then(function(response){
        switch (response.position){
            case 'Manager':
                inquirer.prompt([
                    {
                        type: 'input',
                        name: 'office',
                        message: 'What is their office number?'
                    }
                ]).then(function(res){
                    let newMember = new Manager(response.name, response.position, response.id, response.email, res.office);
                    // console.log(newMember);
                    allEmployees.push(newMember)
                    addMoreMembers();
                });
                break;
            case 'Engineer':
                inquirer.prompt([
                    {
                        type: 'input',
                        name: 'link',
                        message: 'What is their GitHub username?'
                    }
                ]).then(function(res){
                    let newMember= new Engineer(response.name, response.position, response.id, response.email, res.link);
                    // console.log(newMember);
                    allEmployees.push(newMember)
                    addMoreMembers();
                });
                break;
            case 'Intern':
                inquirer.prompt([
                    {
                        type: 'input',
                        name: 'school',
                        message: 'What school do they attend?'
                    }
                ]).then(function(res){
                    let newMember = new Intern(response.name, response.position, response.id, response.email, res.school);
                    // console.log(newMember);
                    allEmployees.push(newMember)
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
    ]).then(function(response){
        if (response.addMore === 'Yes'){
            addMembers();
        } else if (response.addMore === 'No'){
            console.log(allEmployees);
        };
    });
};

addMembers();