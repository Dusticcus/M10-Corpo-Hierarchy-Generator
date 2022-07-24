const Intern = require("../lib/Engineer");

describe("Intern", () => {
    describe("Initialization", () => {
        it("should create an object with a name, id, email, officeNumber if provided valid arguments", () => {
            const intern = new Intern("Dusty", 123, "no@no.com", "Dusticcus");

            // Verify that the new object has the correct properties
            expect(intern.name).toEqual("Dusty");
            expect(intern.id).toEqual(123);
            expect(intern.email).toEqual("no@no.com");
            expect(intern.github).toEqual("Dusticcus");
        });
    });
});