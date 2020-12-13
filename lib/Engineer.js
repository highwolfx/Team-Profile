const Employee = require('./Employee');

class Engineer extends Employee{
    constructor(name, position, id, email, link){
        super(name, position, id, email);
        this.link = link;
    };
};

module.exports = Engineer;
