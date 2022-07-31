const Engineer = require('../lib/Engineer');
jest.mock('../lib/Engineer');

console.log(new Engineer());

test('creates engineer office number', () => {
    const engineer = new Engineer('Frank');

    expect(engineer.name).toBe('Frank');
});