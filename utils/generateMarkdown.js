function renderLicenseBadge(license) {
  if (license == "None") {
    return "";
  }
  else {
    return `![badge](https://img.shields.io/badge/license-${license}-blue)`
  }
}

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
If you are interested in contacting me my GitHub profile is [${data.github}](https://github.com/${data.github}). <br />
My email is [${data.email}](mailto:${data.email}).
`;
}

module.exports = generateMarkdown;
