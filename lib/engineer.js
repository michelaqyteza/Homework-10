const Employee = require ("./employee.js")

class Engineer extends Employee {
    constructor(github, name, id, email){
        super(name, id, email)
        this.github = github
        this.role= "Engineer";
    }
    getGithub(){
        return this.github
    }
}
module.exports = Engineer;