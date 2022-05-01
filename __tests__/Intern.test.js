const Employee = require('../lib/Employee');

test('gives engineer role', () => {
    const intern = new Employee('Shaun');

    expext(intern.name).toBe('Shaun');
});