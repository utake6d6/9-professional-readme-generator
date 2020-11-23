// allows access to inquirer in the index.js file
const inquirer = require("inquirer");
// require allows index.js file to access fs module functions through the fs assignment
const fs = require("fs");
// allows access to generateMarkdown.js
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
  {
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
