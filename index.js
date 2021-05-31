const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/employee.js")
const Engineer = require("./lib/engineer.js")
const Intern = require("./lib/intern.js")
const Manager = require("./lib/manager.js");
const template = require("./src/template.js");

const managers = [];
const engineers = [];
const interns = [];
const employee = [];
let totalCards = 0;
let totalEngineers = 0;
let totalInterns = 0;
let totalManagers = 0;

//Manager Questions
const promptManager = () => {
    return inquirer.prompt([
        {
            type: "input",
            message: "What is your name?",
            name: "name",
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
            name: "name",
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
            name: "name",
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

//Manager
const init = async () => {
    const answers = await promptManager();
    const { name, managerId, managerEmail, managerOfficeNumber, addMore } = answers;
    const manager = new Manager(managerOfficeNumber, name, managerId, managerEmail)
    managers.push(manager);
    if (addMore === "add an Engineer") {
        addEngineer();
    } else if (addMore === "add an Intern") {
        addIntern();
    }
    else {
        const data = template.generateHtml(managers, engineers, interns)
        console.log(data)
        writeToFile(data)
    }
};

//Engineer
const addEngineer = async () => {
    const answers = await promptEngineers();
    const { name, engineerId, engineerEmail, engineerGitHub, addMore } = answers;
    const engineer = new Engineer(engineerGitHub, name, engineerId, engineerEmail)
    engineers.push(engineer);
    if (addMore === "add an Engineer") {
        addEngineer();
    } else if (addMore === "add an Intern") {
        addIntern();
    } else {
        const data = template.generateHtml(managers, engineers, interns)
        writeToFile(data)
    }
};

//Intern
const addIntern = async () => {
    const answers = await promptInterns();
    const { name, internId, internEmail, internSchool, addMore } = answers;
    const intern = new Intern(internSchool, name, internId, internEmail)
    interns.push(intern);
    if (addMore === "add an Engineer") {
        addEngineer();
    } else if (addMore === "add an Intern") {
        addIntern();
    } else {
        const data = template.generateHtml(managers, engineers, interns)
        writeToFile(data)
    }
};

function writeToFile(data) {
    fs.writeFile("./dist/index.html", data, (err) =>
        err ? console.error(err) : console.log('Success!')
    );
}


init();