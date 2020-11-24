// function to generate markdown for README
function generateMarkdown(data) {
  return `
  
# ${data.projectName}

[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)

## Table of Contents:
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Description:

${data.description}

## Installation:

${data.installation}

## Usage:

${data.usage}

## License:

${data.license}

## Contributing:

${data.contributing}

## Tests:

${data.tests}

## Questions:

If you have any questions please reach out to the developer:

Github: <https://github.com/${data.gitHubRepo}>
\nEmail: <${data.emailAddress}>
`;
}

module.exports = generateMarkdown;

// ![alt text](assets/images/screenshot.png) - for screenshot or vid/gif etc.
// ![License](https://img.shields.io/apm/l/license?color=blue&style=plastic) - for license badge (test)
