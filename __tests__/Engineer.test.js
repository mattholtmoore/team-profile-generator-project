const Engineer = require('../lib/engineer');

describe("Engineer", () => {
  const engineer = new Engineer("Matt", 32, "mattholtmoore", "mattmoore@fakeemail.com");
  
  test("should build an engineer's object", () => {
    expect(typeof engineer).toBe('object')
  });

  test("should return the engineer's name", () => {
    expect(engineer.getName()).toEqual("Matt")
  });

  test("should return the engineer's id", () => {
    expect(engineer.getId()).toEqual(32)
  });

  test("should return the engineer's GitHub username", () => {
    expect(engineer.getGithub()).toEqual("mattholtmoore")
  });

  test("should return the engineer's email", () => {
    expect(engineer.getEmail()).toEqual("mattmoore@fakeemail.com")
  });

  test("should return the 'engineer' role", () => {
    expect(engineer.getRole()).toBe("Engineer")
  });

});