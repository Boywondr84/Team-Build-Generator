const Engineer = require('../lib/Engineer');
jest.mock('../lib/Engineer');

console.log(new Engineer());

test('get github account name', () => {
    const engineer = new Engineer('Bob');

    expect(engineer.getGithub()).toBe(`https://github.com/${engineer.github}`);
});