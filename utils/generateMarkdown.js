// function to generate markdown for README
function generateMarkdown(data) {
  return `
  
# ${data.projectName}

`;
}

module.exports = generateMarkdown;

// ![alt text](assets/images/screenshot.png) - for screenshot or vid/gif etc.
//
