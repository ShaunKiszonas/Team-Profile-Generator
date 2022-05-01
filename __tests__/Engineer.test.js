const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');

test('gives engineer role', () => {
    const employee = new Employee('Shaun');

    expext(employee.name).toBe('Shaun');
});