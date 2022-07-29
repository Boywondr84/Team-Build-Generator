const Employee = require('../lib/Employee');
jest.mock('../lib/Employee');

// console.log(new Employee());

test('creates an employee object', () => {
    const employee = new Employee('Ryan');

    expect(employee.name).toBe('Ryan');
});

test('get employee name', () => {
    const employee = new Employee('Ryan');

    expect(employee.getName()).toEqual(expect.stringContaining(employee.name));
});

test('get employee email', () => {
    const employee = new Employee('Ryan');

    expect(employee.getEmail()).toBe(`${employee.name}@email.com`);
});

test('get employee role', () => {
    const employee = new Employee('Ryan');

    expect(employee.getRole()).toBe('Employee');
});