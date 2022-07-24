const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    describe("Initialization", () => {
        it("should create an object with a name, id, email, officeNumber if provided valid arguments", () => {
            const engineer = new Engineer("Dusty", 123, "no@no.com", "Dusticcus");

            // Verify that the new object has the correct properties
            expect(engineer.name).toEqual("Dusty");
            expect(engineer.id).toEqual(123);
            expect(engineer.email).toEqual("no@no.com");
            expect(engineer.github).toEqual("Dusticcus");
        });
    });
});