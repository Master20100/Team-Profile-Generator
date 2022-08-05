const Engineer = require("../lib/Engineer.js");

describe('Engineer class', () => {
    it("should get the engineer name when calling getName function", () => {
        // Arrange
        const name = "John";
        // Act
        const obj = new Engineer(name, "01", "john@hotmail.com", "JohngitHub");
        // Assert
        expect(obj.getName()).toBe(name);
    }),
        it("should get the engineer id when calling getID function", () => {
            // Arrange
            const id = "01";
            // Act
            const obj = new Engineer("John", id, "john@hotmail.com", "JohngitHub");
            // Assert
            expect(obj.getId()).toBe(id);
        }),
        it("should get the engineer email when calling getEmail function", () => {
            // Arrange
            const email = "john@hotmail";
            // Act
            const obj = new Engineer("John", "01", email, "JohngitHub");
            // Assert
            expect(obj.getEmail()).toBe(email);
        }), 
        it("should get the engineer github when calling getGithub function", () => {
             // Arrange
             const gitHub = "johngitHub";
             // Act
             const obj = new Engineer("John", "01", "john@hotmail.com", gitHub);
             // Assert
            expect(obj.getGithub()).toBe(gitHub);
        }),
        it("should get the engineer role when calling getRole function", () => {
            // Arrange
            const role = "engineer";
            // Act
            const obj = new Engineer("John", "01", "john@hotmail.com", "JohngitHub");
            // Assert
            expect(obj.getRole()).toBe(role);
        })
});
