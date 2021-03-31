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

// create engineer html
const createEngineer = (engineer) => {
    return `
        <div class="card employee-card">
        <div class="card-header">
            <h2 class="card-title">${engineer.getName()}</h2>
            <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>${engineer.getPosition()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID:${engineer.getID()}
                </li>
                <li class="list-group-item">
              Email: <a href="mailto: ${engineer.getEmail()}">${engineer.getEmail}</a>
            </li>
            <li class="list-group-item">
              Github: <a href=""https://github.com/${engineer.getGithub()}">${engineer.getGithub()}</a>
            </li>
          </ul>
        </div>
    </div>
    `;
}

// create intern html
const createIntern = (intern) => {
    return `
        <div class="card employee-card">
        <div class="card-header">
            <h2 class="card-title">${intern.getName()}</h2>
            <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>${intern.getPosition()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: 
                ${intern.getID()}
                </li>
                <li class="list-group-item">
                Email: <a href="mailto: ${intern.getEmail}"> ${intern.getEmail}</a>
                </li>
                <li class="list-group-item"> Institution: ${intern.getInstitution}</li>
            </ul>
        </div>
    </div> 
    `;
}

// create employee
const createEmployee = (Employee) => {
    return `
        <div class="card employee-card">
        <div class="card-header">
            <h2 class="card-title">${employee.getName()}}</h2>
            <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>${employee.getPosition()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${employee.getID()}}</li>
                <li class="list-group-item">
                    Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a>
                </li>
          </ul>
        </div>
    </div>
    `;
}

module.exports = function generateTeam(team) {
    return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
          integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2"
          crossorigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
          integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
          crossorigin="anonymous"
        />
        <link rel="stylesheet" href="style.css" />
        <title>My Team</title>
      </head>
      <body>
        <div id="jumbo" class="jumbotron jumbotron-fluid text-white">
          <div class="container">
            <h1 class="display-3 text-center">My Team</h1>
          </div>
        </div>
        <div class="container">
          <div class="row">
                <div class="team-area col-12 d-flex
                justify-content-center">
                    ${createTeam(team)}
                </div>
            </div>
        </div>
      </body>
    </html>
    
    `;
};