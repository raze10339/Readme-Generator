// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
 
  if (!license) return ''; 
  return `![License](https://img.sheilds.io/badge/License-${license}-blue.svg)`;
}
  

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
 
  if (!license) return '';
  return `https://opensource.org/license/${license}`;

}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

  if (!license) return ''; 

  return `
## License
This project is licensed under the ${license} license. You can read more about it[here]($renderLicenselink(license)}).`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)} 
 

## Description
${data.description}

## Installation
\`\`\`
${data.installation}
\`\`\`

## Usage
${data.usage}

## Contributing
${data.contributing}

## Tests
\`\`\`
${data.tests}
\`\`\`

## Questions
If you have any questions, please contact me at [${data.email}](mailto:${data.email}).
- GitHub: [${data.github}](https://github.com/${data.github})

`;
}

export default generateMarkdown;
