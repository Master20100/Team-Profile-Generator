const Manager = require("../lib/Manager.js");

describe('Manager class', () => {
    it("should get the manager name when calling getName function", () => {
        // Arrange
        const name = "John";
        // Act
        const obj = new Manager(name, "01", "john@hotmail.com", "04444444");
        // Assert
        expect(obj.getName()).toBe(name);
    }),
        it("should get the manager id when calling getID function", () => {
            // Arrange
            const id = "01";
            // Act
            const obj = new Manager("John", id, "john@hotmail.com", "04444444");
            // Assert
            expect(obj.getId()).toBe(id);
        }),
        it("should get the manager email when calling getEmail function", () => {
            // Arrange
            const email = "john@hotmail";
            // Act
            const obj = new Manager("John", "01", email, "04444444");
            // Assert
            expect(obj.getEmail()).toBe(email);
        }), 
        it("should get the manager office number when calling getGithub function", () => {
             // Arrange
             const officeNumber = "04444444";
             // Act
             const obj = new Manager("John", "01", "john@hotmail.com", officeNumber);
             // Assert
            expect(obj.getOfficeNumber()).toBe(officeNumber);
        }),
        it("should get the manager role when calling getRole function", () => {
            // Arrange
            const role = "manager";
            // Act
            const obj = new Manager("John", "01", "john@hotmail.com", "04444444");
            // Assert
            expect(obj.getRole()).toBe(role);
        })
});
