const Manager = require('../lib/Employee');
jest.mock('../lib/Employee');

console.log(new Manager());

test('creates a manager object', () => {
    const manager = new Manager('Ryan');

    expect(manager.name).toBe('Ryan');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toBe(`${manager.name}@email.com`);
    expect(manager.office).toEqual(expect.any(Number));
});