const Manager = require('../lib/Manager');
jest.mock('../lib/Manager');

console.log(new Manager());

test('creates a manager object', () => {
    const manager = new Manager('Becky');

    expect(manager.name).toBe('Becky');
});