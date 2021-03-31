class Employee {
    constructor(name, id, email, role) {
        this.name = name;
        this.id = id;
        this.email = email
        this.position = position
    }
    getName() {
        return this.name
    }
    getID() {
        return this.id
    }
    getEmail() {
        return this.email
    }
    getPosition() {
        return "Employee"
    }
}

module.exports = Employee