class Employee {
    constructor(name, id, email, position = "Employee") {
        this.name = name;
        this.id = id;
        this.email = email
        this.position = position;
    }
    getName() {
        return this.name;
    }
    getID() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return this.position;
    }
}

module.exports = Employee