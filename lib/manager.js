const Employee = require ("./employee.js")

class Manager extends Employee {
    constructor(officeNumber, name, id, email){
        super(name, id, email)
        this.officeNumber = officeNumber
        this.role= "Manager";
    }
    getOfficeNumber(){
        return this.officeNumber
    }
}
module.exports = Manager;