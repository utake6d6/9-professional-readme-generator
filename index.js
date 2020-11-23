// allows access to inquirer in the index.js file
const inquirer = require("inquirer");
// require allows index.js file to access fs module functions through the fs assignment
const fs = require("fs");
// allows access to generateMarkdown.js
const generateMarkdown = require("./utils/generateMarkdown.js");

// array of questions for user
const questions = [
  {
    // Title of the project
    type: "input",
    name: "projectName",
    message: "What's the name of your project?",
  },
  {
    // Description
    type: "input",
    name: "description",
    message: "Provide a description of your project.",
  },
  {
    // Installation instructions
    type: "input",
    name: "installation",
    message:
      "What are the steps required to get the development environment running?",
  },
  {
    // Usage information
    type: "input",
    name: "usage",
    message: "Provide instructions and examples for use.",
  },
  {
    // License
    type: "list",
    name: "license",
    message: "Select a license for your project. (Required)",
    choices: ["MIT", "Apache 2.0", "ISC", "N/A"],

    validate: (licenseList) => {
      if (licenseList) {
        return true;
      } else {
        console.log("Please select a listed license.");
        return false;
      }
    },
  },
  {
    // Contribution guidelines
    type: "input",
    name: "contributing",
    message:
      "Provide some guidelines for how you'd like other developers to contribute to your project.",
  },
  {
    // Test instructions
    type: "input",
    name: "tests",
    message:
      "Provide any tests for your application and examples on how to run them.",
  },
  {
    // GitHub username
    type: "input",
    name: "gitHubUsername",
    message: "Provide your GitHub username.",
  },
  {
    // Email address
    type: "input",
    name: "emailAddress",
    message: "Provide your GitHub affiliated email address.",
  },
];

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      return console.log(err);
    }
    console.log("README.md generated");
  });
}

// function to initialize program
function init() {
  inquirer.prompt(questions).then((answers) => {
    const generateDetails = generateMarkdown(answers);
    writeToFile("./README.md", generateDetails);
  });
}

// function call to initialize program
init();
