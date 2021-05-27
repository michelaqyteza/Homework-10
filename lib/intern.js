const Employee = require ("./employee.js")

class Intern extends Employee {
    constructor(school, name, id, email){
        super(name, id, email)
        this.school = school
        this.role= "Intern";
    }
    getSchool(){
        return this.school
    }
}
module.exports = Intern;