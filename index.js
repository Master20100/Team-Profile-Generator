//inquirer added(after installed), fs added and 3 classes imported.
const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const fs = require("fs");
let managerStatus = false;

//html template with the closing tags of body and html
const htmlTemplateStart =
    `<!DOCTYPE html>
<html>

<head>
    <title>Team Profile Generator</title>
    <link rel="stylesheet" href="styles.css">
</head>

<body>
    <header>My Team</header>
    <container>`;


//html closing tags   
const htmlTemplateEnd =
    `</container>
    </body>
    </html>`;


//writer function that appends the html code by adding units that represent manager,
//engineer or intern
function writer(occupation) {
    fs.appendFile("./dist/index.html",
        `<section class="unit">
<section class="basicInfo">
<label class="name">${occupation.name}</label>
<label class="position">${occupation.getRole()}</label>
</section >
<section class="extraInfo">
<label class="iD"> ID:${occupation.id}</label>
<label class="email"> Email:<a href="mailto:${occupation.email}">${occupation.email}</a></label>
<label class="misc">
${(occupation.getRole() == "engineer") ? "gitHub: <a href=http://www.github.com/" + occupation.getGithub() + ">" + occupation.getGithub() + "</a>" : (occupation.getRole() == "intern") ? "school: " + occupation.getSchool() : "office number: " + occupation.getOfficeNumber()}</label>
</section>
</section>
`, function (err) { })
}


//inquirerCore function that check if no manager will ask user to add one
//if there is a manager will ask user to either add engineer or add intern or exit
//if engineer or intern added, it will keep running usning recusion until user exits.
function inquirerCore() {
    if (!managerStatus) {
        inquirer.prompt(managerQuestions)
            .then(answers => {
                const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
                fs.writeFile('./dist/index.html', htmlTemplateStart, (err) => { });
                writer(manager);
                managerStatus = true;
                inquirerCore();
            })
    }
    else {
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
                            htmlTemplateEnd, function (err) { })
                }


            }
        )

    }
}

//3 arrays of objects, each array represent questions of either manager,
//intern or engineer.
const managerQuestions = [{
    name: "name",
    message: "please enter the team manager???s name",
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

//starter function to run the program
function init() {
    //will create a new manager then assign values to 

    inquirerCore();
}



init();

