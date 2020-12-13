const Employee = require('./Employee');

class Intern extends Employee{
    constructor(name, id, email, school, position){
        super(name, id, email);
        this.school = school;
        this.position = position;
    };
    getSchool(){
        return this.school;
    };
    getRole(){
        return this.position;
    };
};

module.exports = Intern;