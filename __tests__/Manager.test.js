const Manager = require('../lib/manager');
const manager = new Manager("Matt", 32, "mattmoore@fakeemail.com", "1");

describe("Manager", () => {

  test("should build an manager's object", () => {
    expect(typeof manager).toBe('object')
  });

  test("should return the manager's name", () => {
    expect(manager.getName()).toEqual("Matt")
  });

  test("should return the manager's id", () => {
    expect(manager.getId()).toEqual(32)
  });

  test("should return the manager's email", () => {
    expect(manager.getEmail()).toEqual("mattmoore@fakeemail.com")
  });

  test("should return the manager's office number", () => {
    expect(manager.getOfficeNumber()).toEqual("1")
  });

  test("should return the 'manager' role", () => {
    expect(manager.getRole()).toBe("Manager")
  });

});