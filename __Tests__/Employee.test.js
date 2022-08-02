const Employee = require('../lib/Employee.js');
jest.mock('../lib/Employee.js');

console.log(new Employee());

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

    expect(employee.getEmail()).toBe(employee.email + "@email.com");
});

test('get employee role', () => {
    const employee = new Employee('Ryan');

    expect(employee.getRole()).toBe('Employee');
});

test('get employee id', () => {
    const employee = new Employee('Ryan');

    expect(employee.getId()).toBe("ID: " + employee.id);
});

// test('get school name', () => {
//     const employee = new Employee('Ryan');

//     expect(employee.getSchool()).toBe('NYU');
// });

// test('get office number', () => {
//     const employee = new Employee('Ryan');

//     expect(employee.getOffice()).toBe(`${employee.office}`);
// });