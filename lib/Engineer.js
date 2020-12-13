const Employee = require('./Employee');

class Engineer extends Employee{
    constructor(name, id, email, github, position){
        super(name, id, email);
        this.github = github;
        this.position = position;
    };
    getGithub(){
        return this.github;
    };
    getRole(){
        return this.position;
    };
};

module.exports = Engineer;