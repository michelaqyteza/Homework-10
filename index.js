const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/employee.js")
const Engineer = require("./lib/engineer.js")
const Intern = require("./lib/intern.js")
const Manager = require("./lib/manager.js");
const generateHtml = require("./src/generateHtml.js");

const managers = [];
const engineers = [];
const inters = [];
let totalCards = 0;
let totalEngineers = 0;
let totalInterns = 0;

//Manager Questions
const promptManager = () => {
    return inquirer.prompt([
        {
            type: "input",
            message: "What is your name?",
            name: "manager",
        },
        {
            type: "input",
            message: "What is your ID?",
            name: "managerId",
        },
        {
            type: "input",
            message: "What is your email?",
            name: "managerEmail",
        },
        {
            type: "input",
            message: "What is your office number?",
            name: "managerOfficeNumber",
        },
        {
            type: "list",
            message: "What do you want to do next",
            name: "addMore",
            choices: ["add an Engineer", "add an Intern", "I finished"],
        },
    ])
};

//Engineers Questions
const promptEngineers = () => {
    return inquirer.prompt([
        {
            type: "input",
            message: "What is your name?",
            name: "engineer",
        },
        {
            type: "input",
            message: "What is your ID?",
            name: "engineerId",
        },
        {
            type: "input",
            message: "What is your email?",
            name: "engineerEmail",
        },
        {
            type: "input",
            message: "What is your GitHub username?",
            name: "engineerGitHub",
        },
        {
            type: "list",
            message: "What do you want to do next",
            name: "addMore",
            choices: ["add an Engineer", "add an Intern", "I finished building the team"],
        },
    ])
};

//Intern Questions
const promptInterns = () => {
    return inquirer.prompt([
        {
            type: "input",
            message: "What is your name?",
            name: "intern",
        },
        {
            type: "input",
            message: "What is your ID?",
            name: "internId",
        },
        {
            type: "input",
            message: "What is your email?",
            name: "internEmail",
        },
        {
            type: "input",
            message: "What school do you go to?",
            name: "internSchool",
        },
        {
            type: "list",
            message: "What do you want to do next",
            name: "addMore",
            choices: ["add an Engineer", "add an Intern", "I finished building the team"],
        },
    ])
};

//After answered Engineer questions to proceed
const addEngineer = async () => {
    const Engineer = await promptEngineers();
    const {engineer, engineerId, engineerEmail, engineerGitHub, addMore} = engineer;
    engineers.push(engineer);
        if(engineer.addMore === "add an Engineer"){
            addEngineer();
        }else if (engineer.addMore === "add an Intern") {
            addIntern();
        }else{
            generateHtml();
        }
};
//card for engineer, need help
const createEngineers = () => {
    lets card = "";
    engineers.forEach(engineer => {
        let newEngineer = new Engineer(engineer.engineer, engineer.engineerId, engineer.engineerEmail, engineer.engineerGitHub);
    })
}

//After answered Intern questions to proceed
const addIntern = async () => {
    const newIntern = await promptInterns();
    const {intern, internId, internEmail, internSchool, addMore} = newIntern;
    interns.push(newIntern);
        if(newIntern.addMore === "add an Engineer"){
            addEngineer();
        }else if (newIntern.addMore === "add an Intern"){
            addIntern();
        }else {
            generateHtml();
        }
};
//card for intern, need help
const createInterns = () => {
    lets card = "";
    interns.forEach(intern => {
        let newIntern = new Intern(intern.intern, intern.internId, intern.internEmail, intern.internSchool);
    })
}

//After Manager questions
const init = async () => {
    const managers = await promptManager();
    const {Manager, managerId, managerEmail, managerOfficeNumber, addMore} = managers;
    managers.push(managers);
        if(managers.addMore === "add an Engineer"){
            addEngineer();
        }else if (newIntern.addMore === "add an Intern"){
            addIntern();
        }else {
            generateHtml();
        }
};
//card for manager/beginning
const generateHtml = async () => {
    totalEngineers = engineers.length;
    totalInterns = interns.length;
    totalCards = totalEngineers = totalInterns +1;
    let manager = generateHtml(managers[0].manager, manager[0].managerId, manager[0].managerEmail, totalCards);
    }

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('Success!')
    );
}
function init() {
    inquirer.prompt(questions)
        .then(function (answers) {
            const text = generateHtml.generateHtml(answers)
            writeToFile("./dist/index.html", text)
        })
}

init();