const Engineer = require("../lib/engineer.js");

describe("Engineer class", () => {
    describe("getGithub", () => {
        it("It should return their gitHub username", () =>{
            expect(new Engineer("github","name", 1 , "email").getGithub()).toBe("github")
        })
    })
    describe("getRole", () => {
        it("It should their role", () =>{
            expect(new Engineer("github", "name", 1 , "email").getRole()).toBe("Engineer")
        })
    })
})