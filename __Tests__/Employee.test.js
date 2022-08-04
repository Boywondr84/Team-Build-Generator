const Employee = require('../lib/Employee.js');
jest.mock('../lib/Employee.js');

console.log(new Employee());

test('creates an employee object', () => {
    const employee = new Employee('Ryan');

    expect(employee.name).toBe('Ryan');
});

test('get employee name', () => {
    const employee = new Employee('Ryan');

    expect(employee.getName()).toEqual(expect.stringContaining("Ryan"));
});

test('get employee email', () => {
    const employee = new Employee('Ryan');

    expect(employee.getEmail()).toBe("ryandrums" + "@email.com");
});

test('get employee role', () => {
    const employee = new Employee('Ryan');

    expect(employee.getRole()).toBe('Employee');
});

test('get employee id', () => {
    const employee = new Employee('Ryan');

    expect(employee.getId()).toBe("ID: " + "1");
});