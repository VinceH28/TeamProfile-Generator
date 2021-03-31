//import classes
const Employee = require("./employee.js")
const Manager = require("./manager.js")
const Engineer = require("./engineer.js")

//create empty array for html data
const html = [];

//team
const createTeam = (team) => {
    console.log("Create your team!");
    //loop through team to check each role
    for ( i = 0; i < team.lenght; i ++) {
        switch(team[i].getPosition()) {
            case "Manager":
                const managerCard = createManager(team[i])
                html.push(managerCard)
                break;
            case "Engineer":
                const engineerCard = createEngineer(team[i])
                html.push(engineerCard)
                break;
            case "Employee":
                const employeeCard = createEmployee(team[i])
                html.push(employeeCard)
                break;
            case "Intern":
                const internCard = createIntern(team[i])
                html.push(internCard)
                break;
        }

        console.log(html);
        console.log("Gret Job, now creating page!")
    }
    return html.join(" ")
}

// create manager html
const createManager = (manager) => {
    return `
        <div class="card employee-card">
        <div class="card-header">
            <h2 class="card-title">${manager.getName()}</h2>
            <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>${engineer.getPosition()}</h3>
        </div>
        <ul class="list-group">
            <li class="list-group-item">
                ID:${manager.getId()}
            </li>
            <li class="list-group-item">
                Email: <a href="mailto:${manager.getEmail()}">{${manager.getEmail()}}</a>
            </li>
            <li class="list-group-item">Office Number:  
                ${manager.getOfficeNumber()}
            </li>
        </ul>
        </div>
    </div>
    `;
}

