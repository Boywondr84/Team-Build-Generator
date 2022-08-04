const Intern = require('../lib/Intern');
jest.mock('../lib/Intern');

console.log(new Intern());

test('creates an intern object', () => {
    const intern = new Intern ('Ryan');

    expect(intern.name).toBe('Ryan');
});

test('get school name', () => {
    const intern = new Intern('Ryan');

    expect(intern.getSchool()).toBe("NYU");
});