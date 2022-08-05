const Intern = require("../lib/Intern.js");

describe('Intern class', () => {
    it("should get the intern name when calling getName function", () => {
        // Arrange
        const name = "John";
        // Act
        const obj = new Intern(name, "01", "john@hotmail.com", "MonashBootcamp");
        // Assert
        expect(obj.getName()).toBe(name);
    }),
        it("should get the intern id when calling getID function", () => {
            // Arrange
            const id = "01";
            // Act
            const obj = new Intern("John", id, "john@hotmail.com", "MonashBootcamp");
            // Assert
            expect(obj.getId()).toBe(id);
        }),
        it("should get the intern email when calling getEmail function", () => {
            // Arrange
            const email = "john@hotmail";
            // Act
            const obj = new Intern("John", "01", email, "MonashBootcamp");
            // Assert
            expect(obj.getEmail()).toBe(email);
        }), 
        it("should get the intern school when calling getGithub function", () => {
             // Arrange
             const school = "MonashBootcamp";
             // Act
             const obj = new Intern("John", "01", "john@hotmail.com", school);
             // Assert
            expect(obj.getSchool()).toBe(school);
        }),
        it("should get the intern role when calling getRole function", () => {
            // Arrange
            const role = "intern";
            // Act
            const obj = new Intern("John", "01", "john@hotmail.com", "MonashBootcamp");
            // Assert
            expect(obj.getRole()).toBe(role);
        })
});
