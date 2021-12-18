const Intern = require('../lib/intern');
const intern = new Intern("Matt", 32, "mattmoore@fakeemail.com", "Hard Knocks");

describe("Intern", () => {

  test("should build an intern's object", () => {
    expect(typeof intern).toBe('object')
  });

  test("should return the intern's name", () => {
    expect(intern.getName()).toEqual("Matt")
  });

  test("should return the intern's id", () => {
    expect(intern.getId()).toEqual(32)
  });

  test("should return the intern's email", () => {
    expect(intern.getEmail()).toEqual("mattmoore@fakeemail.com")
  });

  test("should return the intern's school", () => {
    expect(intern.getSchool()).toEqual("Hard Knocks")
  });

  test("should return the 'intern' role", () => {
    expect(intern.getRole()).toBe("Intern")
  });

});