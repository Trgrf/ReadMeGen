// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == "None") {
    return "";
  }
  else if (license === "MIT") {
    return `![badge](https://img.shields.io/badge/license-MIT-blue)`
  }
  else if (license === "Apache 2.0") {
    return `![badge](https://img.shields.io/badge/license-Apache%202.0-blue)`
  }
  else if (license === "GPL") {
    return `![badge](https://img.shields.io/badge/license-GPL-blue)`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return `[MIT](https://opensource.org/licenses/MIT)`
  }
  if (license === 'Apache 2.0') {
    return `[Apache 2.0](https://opensource.org/licenses/Apache-2.0)`
  }
  if (license === 'GPL') {
    return `[GPL](https://opensource.org/licenses/gpl-license)`
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
## Description
${data.description}

## Table of Contents (Optional)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
## Installation
${data.install}
## Usage
${data.usage}
## License
${renderLicenseBadge(data.license)}
${renderLicenseLink(data.license)}
## Credits
${data.credits}
## Tests
${data.test}
## Questions
If you are interested in contacting me my GitHub profile is [${data.github}](https://github.com/Trgrf). <br />
My email is [${data.email}](mailto:${data.email}).
`;
}

module.exports = generateMarkdown;
