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
    message: "",
  },
  {
    // Installation instructions
    type: "input",
    name: "installation",
    message: "",
  },
  {
    // Usage information
    type: "input",
    name: "usage",
    message: "",
  },
  {
    // License
    type: "input",
    name: "license",
    message: "",
    choices: [],
  },
  {
    // Contribution guidelines
    type: "input",
    name: "contributing",
    message: "",
  },
  {
    // Test instructions
    type: "input",
    name: "tests",
    message: "",
  },
  {
    // Questions
    type: "input",
    name: "questions",
    message: "",
  },
  {
    // GitHub username
    type: "input",
    name: "gitHubUsername",
    message: "",
  },
  {
    // Email address
    type: "input",
    name: "emailAddress",
    message: "",
  },
];

// function to write README file
function writeToFile(fileName, data) {}

// function to initialize program
function init() {}

// function call to initialize program
init();
