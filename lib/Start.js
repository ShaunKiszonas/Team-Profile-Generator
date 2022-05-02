const inquirer = require('inquirer');
const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const generatePage = require('../src/page-template');
const fs = require('fs');

class Start {
    constructor() {
        this.team = [];
    }

    startApp() {
        this.createManager();
    }

    createManager() {
        let employee;

        inquirer
            .prompt({
                type: 'text',
                name: 'name',
                message: 'Enter manager\'s name'
            }).then(({ name }) => {
                employee = new Manager(name);

                inquirer
                    .prompt({
                        type: 'text',
                        name: 'id',
                        message: 'Enter manager\'s id'
                    }).then(({ id }) => {
                        employee.id = (id);

                        inquirer
                            .prompt({
                                type: 'text',
                                name: 'email',
                                message: 'Enter manager\'s email'
                            }).then(({ email }) => {
                                employee.email = (email);

                                inquirer
                                    .prompt({
                                        type: 'text',
                                        name: 'officeNumber',
                                        message: 'Enter manager\'s office number'
                                    }).then(({ officeNumber }) => {
                                        employee.officeNumber = (officeNumber);
                                        this.team.push(employee);
                                        this.createEmployee();
                                    })
                            })
                    })


            })

    }
    createEmployee() {
        let employee;

        inquirer
            .prompt({
                type: 'list',
                message: 'Add an employee?',
                name: 'action',
                choices: ['Engineer', 'Intern', 'no more']
            }).then(({ action }) => {
                console.log(action)
                if (action === 'no more') {
                    fs.writeFile('index.html', generatePage(this.team), err => {
                        if (err) throw err;
                        console.log('Portfolio complete! Check out index.html to see the output!');
                        console.log(this.team);
                        return;
                    })
                } else {
                    inquirer
                        .prompt({
                            type: 'text',
                            name: 'name',
                            message: 'Enter employee\'s name'
                        }).then(({ name }) => {
                            if (action === 'Engineer') {
                                employee = new Engineer(name);
                            }
                            else if (action === 'Intern') {
                                employee = new Intern(name);
                            }

                            inquirer
                                .prompt({
                                    type: 'text',
                                    name: 'id',
                                    message: 'Enter employee\'s id'
                                }).then(({ id }) => {
                                    employee.id = (id);

                                    inquirer
                                        .prompt({
                                            type: 'text',
                                            name: 'email',
                                            message: 'Enter employee\'s email'
                                        }).then(({ email }) => {
                                            employee.email = (email);

                                            if (action === 'Engineer') {
                                                inquirer
                                                    .prompt({
                                                        type: 'text',
                                                        name: 'github',
                                                        message: 'Enter employee\'s github'
                                                    }).then(({ github }) => {
                                                        employee.github = (github);
                                                        this.team.push(employee);
                                                        this.createEmployee();
                                                    })
                                            }
                                            if (action === 'Intern') {
                                                inquirer
                                                    .prompt({
                                                        type: 'text',
                                                        name: 'school',
                                                        message: 'Enter employee\'s school'
                                                    }).then(({ school }) => {
                                                        employee.school = (school);
                                                        this.team.push(employee);
                                                        this.createEmployee();
                                                    })
                                            }
                                        })
                                })
                        })
                }

            })
    }
}
module.exports = Start;