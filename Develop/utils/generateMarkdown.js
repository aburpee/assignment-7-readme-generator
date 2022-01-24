// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const licenseType = license;
  let licenseString = ''
  if (licenseType == 'MIT') {
    licenseString = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]'
  }else if (licenseType == 'GNU GPLv3') {
    licenseString = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]'
  }else  if (licenseType == 'Apache License 2.0') {
    licenseString = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]'
  }
  return licenseString;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {
//   const licenseLink = license.license[0];
//   let licenseString = ''
//   if (licenseType = 'MIT') {
//     licenseString = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]'
//   };
//   if (licenseType = 'GNU GPLv3') {
//     licenseString = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]'
//   };
//   if (licenseType = 'Apache License 2.0') {
//     licenseString = '[![License]](https://opensource.org/licenses/Apache-2.0)'
//   }
// }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data, "Fun1");
  let licenseLink = renderLicenseBadge(data.license)
  const readmeContent = `
  # ${data.title}
  ## Table of Contents
  * [License](#license)
  * [Installation](#installation)
  * [Testing](#testing)
  * [Description](#description)
  * [Languages](#languages)
  * [Contributor](#contributorName)
  * [Contact Me](#email)
  * [See other work](#github)
   

  ### License
  ${licenseLink}

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

  ### Contact me
  ${data.email}

  ### See my other work
  [Github](https://github.com/${github})
   `;
  return readmeContent;
}

module.exports = generateMarkdown;
