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

