const Engineer = require('../lib/Engineer');
jest.mock('../lib/Engineer');

console.log(new Engineer());

test('creates engineer office number', () => {
    const engineer = new Engineer('Frank');

    expect(engineer.name).toBe('Frank');
    expect(engineer.github).toBe(`https://github.com/${engineer.github}`);
    // expect(engineer.getRole()).toBe('Engineer');
});

// test('get engineer role', () => {
//     const engineer = new Engineer('Frank');

//     expect(engineer.getRole()).toBe('Engineer');
// });