const Employee = require("../lib/Employee.js");


describe('Employee class', () => {
  it("should get the employee name when calling getName function", () => {
    // Arrange
    const name = "John";
    // Act
    const obj = new Employee(name, "01", "john@hotmail.com");
    // Assert
    expect(obj.getName()).toBe(name);
  }),
    it("should get the employee id when calling getID function", () => {
      // Arrange
      const id = "01";
      // Act
      const obj = new Employee("John", id, "john@hotmail.com");
      // Assert
      expect(obj.getId()).toBe(id);
    }),
    it("should get the employee email when calling getEmail function", () => {
       // Arrange
       const email = "john@hotmail";
       // Act
       const obj = new Employee("John", "01", email);
       // Assert
      expect(obj.getEmail()).toBe(email);
    }),
    it("should get the employee role when calling getRole function", () => {
      // Arrange
      const role = "Employee";
      // Act
      const obj = new Employee("John", "01", "john@hotmail.com");
      // Assert
      expect(obj.getRole()).toBe("Employee");
    })
});