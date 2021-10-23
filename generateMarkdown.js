// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None'){
    return `![license](https://img.shields.io/badge/license-${license}-blue.svg)`
  }
  return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None'){
    return `[license](#license)`
}
  }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None'){
    return `This project is license under ${license}`
}
return ''
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}

 ${renderLicenseBadge(data.license) }

## License
  ${renderLicenseSection(data.license)}

## Table of contents
  * [Description](#description)
  * [Contributing](#contributing)
  * ${renderLicenseLink(data.license)}
  * [Tests](#Tests)
  * [Questins](#questions)
  * [Stack](#stack)
  * [Usage](#usage)

## description
   ${data.description}
  

## contributing
  ${data.contributors}
  
## Tests
   ${data.tests}
  

## questions
if you have any questions about this assignment challenge at ${data.email}. you can view more of my assignment at https://github.com${data.github}.


## stack
   ${data.stack}

## usage
   ${data.usage}
`;
}

module.exports = generateMarkdown;
