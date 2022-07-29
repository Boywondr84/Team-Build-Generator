const Intern = require('../lib/Intern');
jest.mock('../lib/Intern');

console.log(new Intern());

test('creates an intern object', () => {
    const intern = new Intern ('Anna');

    expect(intern.name).toBe('Anna');
    expect(intern.school).toBe('DePaul University');
});