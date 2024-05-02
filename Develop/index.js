// TODO: Include packages needed for this application
const fs = require("fs");
import inquirer from "inquirer";

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "projectName",
    message: "Enter your project's title:",
  },
  {
    type: "input",
    name: "projectDescription",
    message: "Enter your project's description:",
  },
  {
    type: "input",
    name: "installSteps",
    message: "Enter installation steps:",
  },
  {
    type: "input",
    name: "useSteps",
    message: "Enter steps for usage:",
  },
  {
    type: "input",
    name: "contributeSteps",
    message: "How can other developers contribute to your project?",
  },
  {
    type: "input",
    name: "runTestSteps",
    message: "How can other developers run tests on your project's code?",
  },
  {
    type: "checkbox",
    message: "Choose your project's license:",
    name: "projectLicense",
    choices: [
      "Creative Commons license family",
      "Creative Commons Zero v1.0 Universal",
      "Creative Commons Attribution 4.0",
      "Creative Commons Attribution ShareAlike 4.0",
      "Do What The F*ck You Want To Public License",
      "Educational Community License v2.0",
      "Eclipse Public License 1.0",
      "Eclipse Public License 2.0",
      "European Union Public License 1.1",
      "GNU Affero General Public License v3.0",
      "GNU General Public License family",
      "GNU General Public License v2.0",
      "GNU General Public License v3.0",
      "GNU Lesser General Public License family",
      "GNU Lesser General Public License v2.1",
      "GNU Lesser General Public License v3.0",
      "ISC",
      "LaTeX Project Public License v1.3c",
      "Microsoft Public License",
      "MIT",
      "Mozilla Public License 2.0",
      "Open Software License 3.0",
      "PostgreSQL License",
      "SIL Open Font License 1.1",
      "University of Illinois/NCSA Open Source License",
      "The Unlicense",
      "zLib License",
    ],
  },
  {
    type: "input",
    name: "githubUsername",
    message: "Enter your Github username:",
  },
  {
    type: "input",
    name: "emailAddress",
    message: "Enter your email address:",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
