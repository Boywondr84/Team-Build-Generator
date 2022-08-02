const Engineer = require('../lib/Engineer.js');
jest.mock('../lib/Engineer.js');

console.log(new Engineer());

test('create an engineer object', () => {
    const engineer = new Engineer('Bill');

    expect(engineer.name).toBe('Bill');
});

test('get github account name', () => {
    const engineer = new Engineer('Bill');

    expect(engineer.getGithub()).toEqual(engineer.github);
});