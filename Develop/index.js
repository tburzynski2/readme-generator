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
      "None (no license)",
      "Apache 2.0 License",
      "Boost Software License 1.0",
      "BSD 3-Clause License",
      "BSD 2-Clause License",
      "Creative Commons - CC0",
      "Creative Commons - Attribution 4.0 International",
      "Creative Commons - Attribution-ShareAlike 4.0 International",
      "Creative Commons - Attribution-NonCommercial 4.0 International",
      "Creative Commons - Attribution-NoDerivates 4.0 International",
      "Creative Commons - Attribution-NonCommmercial-ShareAlike 4.0 International",
      "Creative Commons - Attribution-NonCommercial-NoDerivatives 4.0 International",
      "Eclipse Public License 1.0",
      "GNU GPL v3",
      "GNU GPL v2",
      "GNU AGPL v3",
      "GNU LGPL v3",
      "GNU FDL v1.3",
      "The Hippocratic License 2.1",
      "The Hippocratic License 3.0",
      "IBM Public License Version 1.0",
      "ISC License (ISC)",
      "The MIT License",
      "Mozilla Public License 2.0",
      "Attribution License (BY)",
      "Open Database License (ODbL)",
      "Public Domain Dedication and License (PDDL)",
      "The Perl License",
      "The Artistic License 2.0",
      "SIL Open Font License 1.1",
      "The Unlicense",
      "The Do What the Fuck You Want to Public License",
      "The zlib/libpng License",
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
function writeToFile(fileName, data) {
  fs.writeFile(fileName, JSON.stringify(data, null, "\t"), (err) =>
    err ? console.log(err) : console.log("Success!")
  );
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((data) => {
    const filename = `${data.name.toLowerCase().split(" ").join("")}.json`;
    writeToFile(filename, data);
  });
}

// Function call to initialize app
init();
