const Employee = require('./Employee');

class Manager extends Employee{
    constructor(name, position, id, email, officeNumber){
        super(name, position, id, email);
        this.officeNumber = officeNumber;
    };
};

module.exports = Manager;