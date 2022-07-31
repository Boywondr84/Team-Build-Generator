const Employee = require('../lib/Employee');
jest.mock('../lib/Employee');

console.log(new Employee());

test('creates an employee object', () => {
    const employee = new Employee('Ryan');

    expect(employee.name).toBe('Ryan');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toBe(`${employee.name}`.toLowerCase() + "@email.com");
});

test('get employee name', () => {
    const employee = new Employee('Ryan');

    expect(employee.getName()).toEqual(expect.stringContaining(employee.name));
});

test('get employee email', () => {
    const employee = new Employee('Ryan');

    expect(employee.getEmail()).toBe(`E-mail: ${employee.email}`);
});

test('get employee role', () => {
    const employee = new Employee('Ryan');

    expect(employee.getRole()).toBe('Employee');
});

test('get github account name', () => {
    const employee = new Employee('Ryan');

    expect(employee.getGithub()).toBe(`https://github.com/${employee.name}` + "2022");
});