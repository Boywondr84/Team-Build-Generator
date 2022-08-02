const Manager = require('../lib/Manager');
jest.mock('../lib/Manager');

console.log(new Manager());

test('creates a manager object', () => {
    const manager = new Manager('Patti');

    expect(manager.name).toBe('Patti');
});

test('creates office number', () => {
    const manager = new Manager('Patti');

    expect(manager.getOffice()).toBe(manager.office);
});