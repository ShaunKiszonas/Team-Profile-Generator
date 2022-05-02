const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');

test('gives engineer role', () => {
    const employee = new Employee('Shaun');

    expect(employee.name).toBe('Shaun');
});