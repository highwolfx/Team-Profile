const Employee = require('./Employee');

class Manager extends Employee{
    constructor(name, id, email, officeNumber, position){
        super(name, id, email);
        this.officeNumber = officeNumber;
        this.position = position;
    };
    getOfficeNumber(){
        return this.officeNumber;
    };
    getRole(){
        return this.position;
    };
};

module.exports = Manager;