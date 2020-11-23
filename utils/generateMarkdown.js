// function to generate markdown for README
function generateMarkdown(data) {
  return `
  
# ${data.projectName}

![License](https://img.shields.io/apm/l/license?color=blue&style=plastic)

## Table of Contents:
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Description:

## Installation:

## Usage:

## License:

## Contributing:

## Tests:

## Questions:



`;
}

module.exports = generateMarkdown;

// ![alt text](assets/images/screenshot.png) - for screenshot or vid/gif etc.
// ![License](https://img.shields.io/apm/l/license?color=blue&style=plastic) - for license badge (test)
