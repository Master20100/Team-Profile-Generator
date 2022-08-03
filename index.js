
const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const fs = require("fs");

function writer(occupation){
    console.log(occupation);
    fs.appendFile("./dist/index.html",
        `<section class="unit">
<section class="basicInfo">
<label class="name">${occupation.name}</label>
<label class="position">${occupation.getRole()}</label>
</section >
<section class="extraInfo">
<label class="iD"> ID:${occupation.id}</label>
<label class="email"> Email:${occupation.email}</label>
<label class="misc">
${(occupation=="engineer")?"gitHub: "+occupation.getGithub():(occupation=="intern")?"school: "+occupation.getSchool():"office number: " + occupation.getOfficeNumber()}</label>
</section>
</section>
`,function (err) {})}

function inquirerCore() {
    inquirer.prompt([{
        type: 'list',
        name: 'addition',
        message: 'Please add other team members, otherwise please exit',
        choices: ['add engineer', 'add intern', 'exit']
    }]).then(
        answers => {
            switch (answers.addition) {
                case 'add engineer':
                    inquirer.prompt(engineerQuestions).then(answers => { const engineer = new Engineer(answers.name, answers.id, answers.email, answers.gitHub); writer(engineer); inquirerCore() })
                    break;
                case 'add intern':
                    inquirer.prompt(internQuestions).then(answers => { const intern = new Intern(answers.name, answers.id, answers.email, answers.school); writer(intern); inquirerCore() })
                    break;

                default:
                    fs.appendFile("./dist/index.html",
                    `</container>
                    </body>
                    </html>`,function(err){})
            }


        }
    )

}



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
                writer(manager);
                inquirerCore();
            }
        )
    //     inquirer.prompt([{
    //     type: 'list',
    //     name: 'addition',
    //     message: 'Please add other team members, otherwise please exit',
    //     choices: ['add engineer', 'add intern','exit']
    // }])










}

init();

