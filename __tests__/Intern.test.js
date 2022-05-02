const Employee = require('../lib/Employee');

test('gives engineer role', () => {
    const intern = new Employee('Shaun');

    expect(intern.name).toBe('Shaun');
});