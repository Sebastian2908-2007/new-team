const Employee = require('./Employee')
class Manager extends Employee {
    
    constructor(name,employId,email,officeNum) {
        super(name,employId,email,officeNum )
        this.officeNum = officeNum;
    }
    getRole() {
        // this should overide to return manager
    }
}

module.exports = Manager;