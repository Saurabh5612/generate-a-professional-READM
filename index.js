// TODO: Include packages needed for this application
var inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
    
    {
        type:"input",
        name:"title",
        message:"what is your project title?"
    },
    {
        type:"input",
        name:"github",
        message:"what is your Github  username?",
       
           

    },
    {
        type:"input",
        name:"email",
        message:"Please enter your email:",
        
    },
    {
        type:"list",
        name:"license",
        message:"Choose a license for your project",
        choices: ["ISC", 'MIT','GNU','None']
    },
    {
        type: "input",
        name: "contributors",
        message: "who are the contributors to your project?",
       
    },
    {
        type: "input",
        name: "description",
        message:"Enter a description of your project.",
        
    },
    {
        type: "input",
        name: "usage",
        message: "What is this project usage for?"
    },
    {
        type: "checkbox",
      message: "What languages do you know?",
      name: "stack",
      choices: ["HTML', 'CSS', 'JavaScript', 'SQL"]
    },
    {
        type:"input",
        name:"tests",
        message:"what should be run to tests project?"
    },

]


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(fileName, data) 
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    // pass the questions

    .then(response => {

        console.log("generating markdown.."), 
        
            writeToFile("REAME.md", generateMarkdown({...response}))
        })
        .catch(err=>console.log(err))
        
   } 
    


// Function call to initialize app
init();
