// Returns a license badge based on which license is passed in. If there is no license, returns an empty string.
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`
  }
  return "";
}

// Returns the license link. If there is no license, return an empty string.
function renderLicenseLink(license) {
  if (license !== 'None') {
    if (license === 'MIT') {
      return '[License: MIT License](https://opensource.org/licenses/MIT)'
    } else if (license === 'Apache 2.0') {
      return '[License: Apache](https://opensource.org/licenses/Apache-2.0)'
    } else if (license === 'GPL 3.0') {
      return '[License: GNU General Public License v3.0](https://www.gnu.org/licenses/gpl-3.0.en.html)'
    } else if (license === 'BSD3') {
      return '[License: BSD 3-Clause NEW or REVISED License](https://opensource.org/licenses/BSD-3-Clause)'
    }
  }
  return "";
}

// Returns the license section of README. If there is no license, return an empty string.
function renderLicenseSection(license) {
  if (license === 'None') {
    return ""
  } else {
    return `This project is licensed under the ${license} license.`
  }
}

// Generate markdown for README.
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation 
  ${data.installation}

  ## Usage 
  ${data.usage}

  ## License
  &copy; ${new Date().getFullYear()} by ${data.name}
  ${renderLicenseSection(data.license)}
  ${renderLicenseLink(data.license)}

  ## Contributing 
  ${data.contributing}
  
  ## Tests
  ${data.tests}

  ## Questions 
  [github.com/${data.username}](https://github.com/${data.username})
  
  [Email me](${data.email}) with additional questions.
`;
};

module.exports = generateMarkdown;
