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
    name: "projectName",
    message: "What's the name of your project?",
  },
  {
    // Installation instructions
    type: "input",
    name: "projectName",
    message: "What's the name of your project?",
  },
  {
    // Usage information
    type: "input",
    name: "projectName",
    message: "What's the name of your project?",
  },
  {
    // License
    type: "input",
    name: "projectName",
    message: "What's the name of your project?",
  },
  {
    // Contribution guidelines
    type: "input",
    name: "projectName",
    message: "What's the name of your project?",
  },
  {
    // Test instructions
    type: "input",
    name: "projectName",
    message: "What's the name of your project?",
  },
  {
    // Questions
    type: "input",
    name: "projectName",
    message: "What's the name of your project?",
  },
  {
    // GitHub username
    type: "input",
    name: "projectName",
    message: "What's the name of your project?",
  },
  {
    // Email address
    type: "input",
    name: "projectName",
    message: "What's the name of your project?",
  },
];

// function to write README file
function writeToFile(fileName, data) {}

// function to initialize program
function init() {}

// function call to initialize program
init();
