const Employee = require("./employee.js");

class Manager extends Employee{
    constructor(name, id, email, officeNumber, position) {
        super(name, id, email);
        this.officeNumber = officeNumber
        this.role = role
    }
    getOfficeNumber() {
        return this.officeNumber
    }
    getPosition() {
        return "Manager";
    };
};

module.exports = Manager