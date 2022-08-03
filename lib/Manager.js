const  Employee = require("./employee");

class Manager extends Employee{
    constructor(name,id,email,officeNumber){
        super(name,id,email);
        this.officeNumber = officeNumber;
    }
    

     getRole(){
       return "manager";
}
getOfficeNumber(){
    return this.officeNumber};
}


const x = new Manager("mina",1,"m@m.com",32131);
x.getOfficeNumber() == 2 ?console.log("OK"):console.log("NO");
console.log(x.getOfficeNumber());
module.exports = Manager; 
