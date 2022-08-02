const inquirer = require("inquirer");
const Manager =  require("./lib/Manager");

// const x = new Manager();
// console.log(x.getRole());
function init() {

    //will create a new manager then assign values to 
    
inquirer.prompt([{

    //manager’s name, employee ID, email address, and office number
    //here name will be manager.getRole();
    name:"manager",
    message:"please enter the team manager’s name",
},{
    name:"email",
    message:"please enter the email",
},{
    name:"ID",
    message:"please enter the ID",
},
{
    name:"officeNumber",
    message:"please enter the office number"
}
]).then(
    answers=>console.log(answers)
)

}

init();

