const Employee = require("../lib/Employee");

describe("Employee", () => {
    describe("Initialization", () => {
        it("should create an object with a name, id, email, github if provided valid arguments", () => {
            const employee = new Employee("Dusty", 123, "no@no.com",);

            // Verify that the new object has the correct properties
            expect(employee.name).toEqual("Dusty");
            expect(employee.id).toEqual(123);
            expect(employee.email).toEqual("no@no.com");
        });
    });
});