const Employee = require('./lib/Employee.js');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const inquirer = require('inquirer');
const fs = require('fs');

var managerArray = [];
var engineerArray = [];
var internArray = [];

// getNewManager start------------
function getNewManager() {
  const getNewManagerData = new Promise((resolve, reject) => {
    inquirer
      .prompt([
        {
          name: "managerName",
          type: "input",
          message: "Hello! and welcome to the Corpo-Stooge-Simulated-Human-Generator. Please Enter the team Manager name:"
        },
        {
          name: "managerId",
          type: "input",
          message: "Please provide Manager ID:"
        },
        {
          name: "managerEmail",
          type: "input",
          message: "Please provide Manager eMail address:"
        },
        {
          name: "managerOfficeNumber",
          type: "input",
          message: "Please provide Manager office #:"
        }
      ])
      .then((answers) => {
        console.log(answers);
        // Use user feedback for... whatever!!
        let theManager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
        if (theManager) {
          managerArray.push(theManager);

          answers = [];
          resolve(createNewEngineerOrInternOrEndProgram());
        } else {
          reject('Dawg, you need employees or you are not a manager, are you?');
        }
      })
  })
}
getNewManager();
// getNewManager end---------------

// getNewEngineer start--------
function getNewEngineer() {
  inquirer
    .prompt([
      {
        name: "engineerName",
        type: "input",
        message: "Enter engineer name:"
      },
      {
        name: "engineerId",
        type: "input",
        message: "Enter engineer ID:"
      },
      {
        name: "engineerEmail",
        type: "input",
        message: "Enter engineer eMail:"
      },
      {
        name: "engineerGithub",
        type: "input",
        message: "Enter engineer Github:"
      }
    ]).then((answers) => {

      if (answers !== undefined) {
        let newEngineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
        engineerArray.push(newEngineer);
        console.log(engineerArray);
        createNewEngineerOrInternOrEndProgram();
      } else {
        reject('BAD');
      }
    })
}
// getNewEngineer end--------

// getNewInter start---------
function getNewIntern() {
  const getNewInternData = new Promise((resolve, reject) => {
    inquirer
      .prompt([
        {
          name: "internName",
          type: "input",
          message: "Enter intern name:"
        },
        {
          name: "internId",
          type: "input",
          message: "Enter intern ID:"
        },
        {
          name: "internEmail",
          type: "input",
          message: "Enter intern eMail:"
        },
        {
          name: "internSchool",
          type: "input",
          message: "Enter intern school:"
        }
      ])
      .then((answers) => {
        console.log(answers);
        const newIntern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
        if (newIntern) {
          internArray.push(newIntern);
          console.log(internArray);
          resolve(createNewEngineerOrInternOrEndProgram());
        } else {
          reject('bummer');
        }
      })

  })
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else went wrong

      }
    });
}
// getNewIntern end---------------

function createNewEngineerOrInternOrEndProgram() {
  inquirer
    .prompt([
      {
        name: "moveToEngineerOrIntern",
        type: "list",
        message: "Would you like to add additional engineers or interns?",
        choices: ["Engineer", "Intern", "No"]
      }
    ])
    .then((answers) => {
      if (answers.moveToEngineerOrIntern === 'Engineer') {
        getNewEngineer();
      } else if (answers.moveToEngineerOrIntern === "Intern") {
        getNewIntern();
      } else if (answers.moveToEngineerOrIntern === "No") {

        fs.writeFile('./dist/index.html', generateHTML(), function (err) {
          if (err) return console.log(err);
        })
      }
    })
}
function generateHTML() {

  var managerSections = `<div class="card float-left"><h3>${managerArray[0].name}<br>
  ${managerArray[0].getRole()}</h3>
  <div class="card-body"><p>ID: ${managerArray[0].id}</p>
  <p>Email: <a href="mailto:${managerArray[0].email}">${managerArray[0].email}</a></p>
  <p>Office #: ${managerArray[0].officeNumber}</p>
  </div>
  </div>`;
  // console.log(managerArray);
  console.log("MANAGER MAKER FIRED OFF!!!!!!!!!!!!!!!");

  var engineerSections = ``;
  for (i = 0; i < engineerArray.length; i++) {
    engineerSections += `<div class="card float-left"><h3>${engineerArray[i].name}<br>
    ${engineerArray[i].getRole()}</h3>
    <div class="card-body"><p>ID: ${engineerArray[i].id}</p>
    <p>Email: <a href="mailto:${engineerArray[0].email}">${engineerArray[i].email}</a></p>
    <p>Github: <a href="https://github.com/${engineerArray[i].github}">${engineerArray[i].github}</a></p>
    </div>
    </div>`;
    console.log("ENGINEER MAKER FIRED OFF!!!!!!!!!!!!!!!");
  }
  var internSections = ``;
  for (i = 0; i < internArray.length; i++) {
    internSections += `<div class="card float-left"><h3>${internArray[i].name}<br>
    ${internArray[i].getRole()}</h3>
    <div class="card-body"><p>ID: ${internArray[i].id}</p>
    <p>Email: <a href="mailto:${internArray[0].email}">${internArray[i].email}</a></p>
    <p>School: ${internArray[i].school}</p>
    </div>
    </div>`;
    // console.log(internArray);
    console.log("INTERN MAKER FIRED OFF!!!!!!!!!!!!!!!");
  }
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">
      <link rel="stylesheet" href="./styles.css">
      <title>Document</title>
  </head>
  <body><div class="jumbotron"><h1 class="display-6">My Team</h1></div>
  <div class="container-fluid">
    <div class="row row-cols-1 row-cols-md-3">
      ${managerSections} 
      ${engineerSections} 
      ${internSections} 
    </div>
  </div>
  <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.min.js" integrity="sha384-+sLIOodYLS7CIrQpBjl+C7nPvqq+FbNUBDunl/OZv93DB7Ln/533i8e/mZXLi/P+" crossorigin="anonymous"></script>
</body>
</html>`
  ;
}