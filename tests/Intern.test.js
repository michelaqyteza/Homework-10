const Intern = require("../lib/intern.js");

describe("Intern class", () => {
    describe("getSchool", () => {
        it("It should return their school name", () =>{
            expect(new Intern("school","name", 1 , "email").getSchool()).toBe("school")
        })
    })
    describe("getRole", () => {
        it("It should their role", () =>{
            expect(new Intern("school", "name", 1 , "email").getRole()).toBe("Intern")
        })
    })
})