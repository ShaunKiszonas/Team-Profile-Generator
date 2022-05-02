const Employee = require('../lib/Employee');

test('Creates employee object', () => {
    const employee = new Employee('Shaun');

    expect(employee.name).toBe('Shaun');
});