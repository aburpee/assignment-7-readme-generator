// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const licenseType = license;
  let licenseStringBadge = ''
  if (licenseType == 'MIT') {
    licenseStringBadge = '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)'
  } 
  if (licenseType == 'GNU GPLv3') {
    licenseStringBadge = '[License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)'
  }
  if (licenseType == 'Apache License 2.0') {
    licenseStringBadge = '[License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)'
  }
  return licenseStringBadge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const licenseLink = license;
  let licenseStringLink = ''
  if (licenseType = 'MIT') {
    licenseStringLink = '[License: MIT](https://opensource.org/licenses/MIT)'
  };
  if (licenseType = 'GNU GPLv3') {
    licenseStringLink = '[License: GPL v3](https://www.gnu.org/licenses/gpl-3.0)'
  };
  if (licenseType = 'Apache License 2.0') {
    licenseStringLink = '[License: Apache](https://opensource.org/licenses/Apache-2.0)'
  }
  return licenseStringLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data, "Fun1");
  let licenseBadge = renderLicenseBadge(data.license)
  let licenseType = renderLicenseLink(data.license)
  const readmeContent = `
  # ${data.title}
  ## Table of Contents
  * [License](#license)
  * [Installation](#installation)
  * [Testing](#testing)
  * [Description](#description)
  * [Languages](#languages)
  * [Contributors](#contributors)
  * [Email](#email)
  * [Github](#github)
   

  ### License
  ${licenseBadge}

  ${licenseType}

  ### Installation
  ${data.installation}

  ### Testing
  ${data.testing}

  ### Description
  ${data.description}

  ### Languages
  ${data.languages}

  ### Contributors
  ${data.contributorName}

  ### Email
  If you have any questions please reach out by email. 
  [Email](${data.email})
  

  ### Github
  If you'd like to see my other work please visit my github.
  [Github](https://github.com/${data.github})
   `;
  return readmeContent;
}

module.exports = generateMarkdown;
