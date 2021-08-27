// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None") {
    return `www.github.com/license/${license}/`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
## Description
${data.description}.

## Table of Contents (Optional)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
## Installation
${data.install}.
## Usage
${data.usage}.
## License
${data.license}.
## Credits
${data.credits}.
## Tests
${data.test}.
## Questions
If you are interested in contacting me my GitHub profile is ${data.github}. <br />
My email is ${data.email}.
`;
}

module.exports = generateMarkdown;
