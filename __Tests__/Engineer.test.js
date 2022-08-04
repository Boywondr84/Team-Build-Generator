const Engineer = require('../lib/Engineer.js');
jest.mock('../lib/Engineer.js');

console.log(new Engineer());

test('create an engineer object', () => {
    const engineer = new Engineer('Ryan');

    expect(engineer.name).toBe('Ryan');
});

test('get github account name', () => {
    const engineer = new Engineer('Ryan');

    expect(engineer.getGithub()).toBe("ryan5");
});