const Employee = require('./Employee');

class Manager extends Employee {
    constructor() {

    }

    officeNumber() {

    }

    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;