const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const { managerQ, engineerQ, internQ, menuQ } = require("./src/questions");
const generate = require('./src/generateHTML.js');

const inquirer = require('inquirer');
const fs = require('fs');

let team = [];

function addEngineer() {
    inquirer.prompt(engineerQ).then((response) => {
        team.push(new Engineer(response.name, response.id, response.email, response.extra));
        menu();
    });
}

function addIntern() {
    inquirer.prompt(internQ).then((response) => {
        team.push(new Intern(response.name, response.id, response.email, response.extra));
        menu();
    });
}

function buildTeam(filename) {
    fs.writeFile(filename, generate(team), (err) => 
    err ? console.error(err) : console.log('\n\nFile created!'));
}

function menu() {
    inquirer.prompt(menuQ).then((response) => {
        if(response.menuList == 'Engineer'){
            addEngineer();
        }else if(response.menuList == 'Intern'){
            addIntern();
        } else {
            buildTeam('./dist/team.html');
        }
    });
}

function addManager() {
    inquirer.prompt(managerQ).then((response) => {
        team.push(new Manager(response.name, response.id, response.email, response.extra));
        menu();
    });
};

addManager();