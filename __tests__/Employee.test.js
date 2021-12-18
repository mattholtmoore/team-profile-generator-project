const Employee = require("../lib/employee");
const employee = new Employee("Matt", 32, "mattmoore@fakeemail.com");

describe("Employee", () => {

  test("should build an employee's object", () => {
    expect(typeof employee).toBe('object')
  });

  test("should return the employee's name", () => {
    expect(employee.getName()).toEqual("Matt")
  });

  test("should return the employee's id", () => {
    expect(employee.getId()).toEqual(32)
  });

  test("should return the employee's email", () => {
    expect(employee.getEmail()).toEqual("mattmoore@fakeemail.com")
  });

  test("should return the 'Employee' role", () => {
    expect(employee.getRole()).toBe("Employee")
  });

});



