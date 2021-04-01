//import classes
const Employee = require("./library/employee.js");
const Manager = require("./library/manager.js");
const Engineer = require("./library/engineer.js");
const Intern = require("'/library/intern.js");

//modules
const inquirer = require('inquirer');
const path = require("path");

//createTeam function
const createTeam = require("./library/page-template.js");
const { async } = require("rxjs");
const { fstat } = require("node:fs");

//Push employees to empty list
let team = [];

//check for 10 digit phone number
function phoneNumber(phone) {
    const phoneno = /^\d{10}$/;
    return phoneno.test(phone);
}

//intialize inquirer.prompt npm to ask questions and parse the input/validate answers
async function init() {
    const managerData = await inquirer.prompt ([
        {
                type: "input",
                name: "name",
                message: "What is the team manager's name?",
                validate: name => {
                if (name) {
                    return true
                } else { 
                    console.log("Please enter a name")}
                return true;
            },
        },
            {
                type: "input",
                name: "id",
                message: "What is the team manager's id?",
                validate: id => {
                    if (id > 0) {
                        return true;
                    } else {
                        console.log("Please enter a NUMBER greate than zero");}
                    return false

            }
        },
            {
                type: "input",
                name: "id",
                message: "What is the team manager's email?",
                validate: email => {
                    if (email && email.includes("@")) {
                        return true;
                    } else {
                      console.log("Please enter a valid email address")}
                    return false
            }
        },
        
            {
                type: "input",
                name: "officeNumber",
                message: "What is the team manager's phone number?",
                validate: async (input) => {
                    if (!phoneNumber(input)) return "Please enter a valid phone number. ";
                    return true;}
        },
        
            {
                type: "input",
                name: "members",
                message: "How many team members are there?",
                validate: async (input) => {
                    if (Number(input) <= 0) return "Please add a team member";
                    return true;
                },
        },   
    ]);

    //manager constructor
    const manager = newManager(
        managerData.name,
        managerData.id,
        managerData.email,
        managerData.officeNumber
    );
    team.push(manager);

    //loop interating the number of team members chosen & creates new member
    for (var i = 0; i < managerData.members; i++) {
        let memberType = await inquirer.prompt([
            {
                type: "list",
                name: "type",
                message: "Which type of team member would you like to add?",
                choices: ["Engineer", "Intern"],
            },
        ]);
        memberType = memberType.type;
        //Employee input initialized via inquirer.prompt
        const employeeData = await inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: `What is the ${memberType}'s name?`,
                validate: async (input) => {
                    if (input.length <=0) return "Enter a name";
                    return true;
                },
            },
            {
                type: "input",
                name: "id",
                message: `What is the team ${memberType}'s id?`,
                validate: async (input) => {
                    if (input > 0) {
                        return true;
                    } else {
                        return "Enter a NUMBER greater than zero";
                    }
                },
            },
            {
                type: "input",
                name: "email",
                message: `What is the ${memberType}'s email?`,
                validate: async (input) => {
                    if (validator.validate(input)) {
                        return true;
                    } else {
                        return "Enter valid email address";
                    }
                },
            },
            {
                type: "input",
                name: "info",
                message: `What is the ${memberType}'s ${memberType == "Engineer" ? "GitHub" : "Institution"}?`,
            },
        ]);
        //Employee constructor with Engineer & Intern
        const employee =
            memberType == "Engineer"
            ? newEngineer(
                employeeData.name,
                employeeData.id,
                employeeData.email,
                employeeData.data
            )
            : newIntern(
                employeeData.name,
                employeeData.id,
                employeeData.email,
                employeeData.data
            );
        team.push(employee);
    }
    //Render input to output directory in html format
    fs.writeFileSync(outPath, render(team), "utf-8");
    console.log(`Complete!`);
}
//Initialize inquirer prompt
init();