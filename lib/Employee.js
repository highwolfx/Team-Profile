class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.position = 'Employee';
        this.email = email;
    };
    getName(){
        return this.name;
    }
    getId(){
        return this.id;
    };
    getRole(){
        return this.position;
    };
    getEmail(){
        return this.email;
    };
    getRole(){
        return this.position;
    };
};

module.exports = Employee;