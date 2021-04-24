// Require the native node modules
const fs = require("fs");
const path = require("path");

const templatesDir = path.resolve(__dirname, "../templates");
const createTeam = (team) => {
  const html = [];

  html.push(
    ...team
      .filter((employee) => employee.getRole() === "Manager")
      .map((manager) => createTeamManager(manager))
  );
  html.push(
    ...team
      .filter((employee) => employee.getRole() === "Engineer")
      .map((engineer) => createTeamEngineer(engineer))
  );
  html.push(
    ...team
      .filter((employee) => employee.getRole() === "Intern")
      .map((intern) => createTeamIntern(intern))
  );
  return createTeamMain(html.join(""));
};

// createTeam user input to their individual html files using the "replacePlaceholders method"
const createTeamManager = (manager) => {
  let template = fs.readFileSync(
    path.resolve(templatesDir, "manager.html"),
    "utf-8"
  );
  template = replacePlaceholders(template, "name", manager.getName());
  template = replacePlaceholders(template, "position", manager.getRole());
  template = replacePlaceholders(template, "email", manager.getEmail());
  template = replacePlaceholders(template, "id", manager.getId());
  template = replacePlaceholders(
    template,
    "officeNumber",
    manager.getOfficeNumber()
  );
  return template;
};

const createTeamEngineer = (engineer) => {
  let template = fs.readFileSync(
    path.resolve(templatesDir, "engineer.html"),
    "utf-8"
  );
  template = replacePlaceholders(template, "name", engineer.getName());
  template = replacePlaceholders(template, "position", engineer.getRole());
  template = replacePlaceholders(template, "email", engineer.getEmail());
  template = replacePlaceholders(template, "id", engineer.getId());
  template = replacePlaceholders(template, "github", engineer.getGithub());
  return template;
};

const createTeamIntern = (intern) => {
  let template = fs.readFileSync(
    path.resolve(templatesDir, "intern.html"),
    "utf-8"
  );
  template = replacePlaceholders(template, "name", intern.getName());
  template = replacePlaceholders(template, "position", intern.getRole());
  template = replacePlaceholders(template, "email", intern.getEmail());
  template = replacePlaceholders(template, "id", intern.getId());
  template = replacePlaceholders(template, "school", intern.getSchool());
  return template;
};

const createTeamMain = (html) => {
  const template = fs.readFileSync(
    path.resolve(templatesDir, "main.html"),
    "utf-8"
  );
  return replacePlaceholders(template, "team", html);
};

const replacePlaceholders = (template, placeholder, value) => {
  const pattern = RegExp("{{ " + placeholder + " }}", "gm");
  return template.replace(pattern, value);
};

module.exports = createTeam;