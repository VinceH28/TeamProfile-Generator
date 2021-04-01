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

