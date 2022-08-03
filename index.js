// function questions(){
//     return `
//         {${name}:"name",
//         message:"please enter the team manager’s name",
//         name:"email",
//         message:"please enter the email",
//         name:"id",
//         message:"please enter the ID",`
// }
const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const managerQuestions = [{
    name: "name",
    message: "please enter the team manager’s name",
}, {
    name: "email",
    message: "please enter the email",
}, {
    name: "id",
    message: "please enter the ID",
}, {
    name: "officeNumber",
    message: "please enter the office number"
}
]

const engineerQuestions = [{
    name: "name",
    message: "please enter the engineer's name",
}, {
    name: "email",
    message: "please enter the email",
}, {
    name: "id",
    message: "please enter the ID",
}, {
    name: "gitHub",
    message: "please enter the github username"
}
]
const internQuestions = [{
    name: "name",
    message: "please enter the intern name",
}, {
    name: "email",
    message: "please enter the email",
}, {
    name: "id",
    message: "please enter the ID",
}, {
    name: "school",
    message: "please enter the school name"
}
]



function init() {
    //will create a new manager then assign values to 

    inquirer.prompt(managerQuestions)
    .then(
        answers => {
            const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
            console.log(manager);
            return manager;
        }
    ).then(
        //THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team

        inquirer.prompt([{
        type: 'list',
        name: 'addition',
        message: 'Please add other team members, otherwise please exit',
        choices: ['add engineer', 'add intern','exit']
    }]).then(answers=>console.log(answers)))
    




}

init();

