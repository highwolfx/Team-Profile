const Employee = require('./Employee');

class Manager extends Employee{
    constructor(name, position, id, email, office){
        super(name, position, id, email);
        this.office = office;
    };
};

module.exports = Manager;