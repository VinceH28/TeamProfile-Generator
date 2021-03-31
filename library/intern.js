const Employee = require("./employee.js");

class Intern extends Employee {
    constructor(name, id, email, institution, position) {
        super(name, id, email);
        this.institution = institution;
        this.position = position
    }
    getInstitution() {
        return this.institution
    }
    getPosition() {
        return "Intern";
    };
};

module.exports = Intern