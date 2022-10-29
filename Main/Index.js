const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateTeam = require('./src/makeHTML');
const generateCSS = require('./src/makeCSS');
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');

const DIST_DIR = path.resolve(__dirname, 'dist');
const distPath = path.join(DIST_DIR, 'index.html');
const distPathCSS = path.join(DIST_DIR, 'style.css');

const teamMembers = [];

// function for creating manager - inquirer questions
function createManager(){
  inquirer
    .prompt([
      {
          type: 'input',
          message: 'Name: ',
          name: 'name'
      },
      {
          type: 'input',
          message: 'ID: ',
          name: 'id'
      },
      {
          type: 'input',
          message: 'Email: ',
          name: 'email'
      },
      {
          type: 'input',
          message: 'Office number: ',
          name: 'officeNumber'
      }
    ])
    .then((data) => {
      var manager = new Manager(data.name,data.id,data.email,data.officeNumber)
      teamMembers.push(manager);
      createTeam();
    }

    )
}

function createTeam(){

  inquirer
    .prompt([
      {
        type: 'list',
        message: 'Add another member?',
        choices: [  "Engineer",
                    "Intern",
                    "Finish Building Team"],
        name: 'next'
      }
    ])
    .then((data) =>{
      console.log(data.next);
      switch (data.next) {
        case "Engineer":
          createEngineer();
          break;

        case "Intern":
          createIntern();
          break;

        case "Finish Building Team":
          createDeliverables();
          break;

        default:
          break;
      }
    })
}

function createIntern(){
  inquirer
    .prompt([
      {
          type: 'input',
          message: 'Name: ',
          name: 'name'
      },
      {
          type: 'input',
          message: 'ID: ',
          name: 'id'
      },
      {
          type: 'input',
          message: 'Email: ',
          name: 'email'
      },
      {
          type: 'input',
          message: 'School: ',
          name: 'school'
      }
    ])
    .then((data) => {
      var intern = new Intern(data.name,data.id,data.email,data.school)
      teamMembers.push(intern);
      createTeam();
    }

    )
}

function createEngineer(){
  inquirer
    .prompt([
      {
          type: 'input',
          message: 'Name: ',
          name: 'name'
      },
      {
          type: 'input',
          message: 'ID: ',
          name: 'id'
      },
      {
          type: 'input',
          message: 'Email: ',
          name: 'email'
      },
      {
          type: 'input',
          message: 'GitHub: ',
          name: 'github'
      }
    ])
    .then((data) => {
      var engineer = new Engineer(data.name,data.id,data.email,data.github)
      teamMembers.push(engineer);
      createTeam();
    }

    )
}

function createDeliverables(){
  console.log(teamMembers);
  fs.writeFile(distPath, generateTeam(teamMembers), (err) =>
  err ? console.error(err) : console.log('HTML file successfully created'))

  fs.writeFile(distPathCSS, generateCSS(), (err) =>
  err ? console.error(err) : console.log('CSS file successfully created'))

}

createManager();