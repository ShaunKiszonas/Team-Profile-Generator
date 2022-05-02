const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name = '') {
        super(name);
        this.officeNumber;
    }

    officeNumber() {
        return this.officeNumber;
    }

    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;