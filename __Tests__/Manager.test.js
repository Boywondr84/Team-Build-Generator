const Manager = require('../lib/Manager');
jest.mock('../lib/Manager');

console.log(new Manager());

test('creates a manager object', () => {
    const manager = new Manager('Ryan');

    expect(manager.name).toBe('Ryan');
});

test('creates office number', () => {
    const manager = new Manager('Ryan');

    expect(manager.getOfficeNumber()).toBe(manager.office);
});