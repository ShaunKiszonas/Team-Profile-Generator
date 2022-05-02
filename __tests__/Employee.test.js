const Employee = require('../lib/Employee');

test('Creates employee object', () => {
    const employee = new Employee('Shaun', 1, 'blah@email.com');

    expect(employee.name).toBe('Shaun');
    expect(employee.id).toEqual(1);
    expect(employee.email).toBe('blah@email.com');
});