const Manager = require("../lib/Manager");

describe("Manager", () => {
    describe("Initialization", () => {
        it("should create an object with a name, id, email, officeNumber if provided valid arguments", () => {
            const manager = new Manager("Dusty", 123, "no@no.com", 45);

            // Verify that the new object has the correct properties
            expect(manager.name).toEqual("Dusty");
            expect(manager.id).toEqual(123);
            expect(manager.email).toEqual("no@no.com");
            expect(manager.officeNumber).toEqual(45);
        });
    });
});