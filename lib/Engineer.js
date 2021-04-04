const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, employId,email,gitHub){
        super(name,employId,email,gitHub)
        this.gitHub = gitHub;
    }
    getGithub() {

    }

    getRole() {

    }
}

module.exports = Engineer;