const Manager = require("../lib/manager.js");

describe("Manager class", () => {
    describe("getOfficeNumber", () => {
        it("It should return their office number", () =>{
            expect(new Manager(0, "name", 1 , "email").getOfficeNumber()).toBe(0)
        })
    })
    describe("getRole", () => {
        it("It should their role", () =>{
            expect(new Manager(0, "name", 1 , "email").getRole()).toBe("Manager")
        })
    })
})