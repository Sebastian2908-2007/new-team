const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name,employId,employId,school) {
        super(name,employId,email,school);
        this.school = school; 
    }
    getRole() {

    }

    getSchool() {

    }
}
module.exports = Intern;