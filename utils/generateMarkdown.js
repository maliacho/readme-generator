const licenses = [
  'Apache license 2.0',
  'Boost Software License 1.0',
  'BSD 2 - clause "Simplified" license',
  'BSD 3 - clause "New" or "Revised" license',
  'BSD 3 - clause Clear license',
  'Creative Commons Zero v1.0 Universal',
  'Creative Commons Attribution 4.0',
  'Creative Commons Attribution ShareAlike 4.0',
  'Eclipse Public License 1.0',
  'GNU Affero General Public License v3.0',
  'GNU General Public License v2.0',
  'GNU General Public License v3.0',
  'GNU Lesser General Public License v3.0',
  'ISC',
  'MIT',
  'Mozilla Public License 2.0',
  'SIL Open Font License 1.1',
  'The Unlicense',
  'zLib License',
]

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === licenses[0]) {
    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  } else if (license === licenses[1]) {
    return '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'
  } else if (license === licenses[2]) {
    return '[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)'
  } else if (license === licenses[3]) {
    return '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
  } else if (license === licenses[4]) {
    return '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
  } else if (license === licenses[5]) {
    return '[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)'
  } else if (license === licenses[6]) {
    return '[![License: CC BY 4.0](https://licensebuttons.net/l/by/4.0/80x15.png)](https://creativecommons.org/licenses/by/4.0/)'
  } else if (license === licenses[7]) {
    return '[![License: CC BY-SA 4.0](https://licensebuttons.net/l/by-sa/4.0/80x15.png)](https://creativecommons.org/licenses/by-sa/4.0/)'
  } else if (license === licenses[8]) {
    return '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)'
  } else if (license === licenses[9]) {
    return '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)'
  } else if (license === licenses[10]) {
    return '[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html'
  } else if (license === licenses[11]) {
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
  } else if (license === licenses[12]) {
    return '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)'
  } else if (license === licenses[13]) {
    return '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)'
  } else if (license === licenses[14]) {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  } else if (license === licenses[15]) {
    return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
  } else if (license === licenses[16]) {
    return '[![License: Open Font-1.1](https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg)](https://opensource.org/licenses/OFL-1.1)'
  } else if (license === licenses[17]) {
    return '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)'
  } else if (license === licenses[18]) {
    return '[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)'
  } else {
    return ''
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { 
  if (license === licenses[0]) {
    return ``
  } else if (license === licenses[1]) {
    return ``
  } else if (license === licenses[2]) {
    return ``
  } else if (license === licenses[3]) {
    return ``
  } else if (license === licenses[4]) {
    return ``
  } else if (license === licenses[5]) {
    return ``
  } else if (license === licenses[6]) {
    return ``
  } else if (license === licenses[7]) {
    return ``
  } else if (license === licenses[8]) {
    return ``
  } else if (license === licenses[9]) {
    return ``
  } else if (license === licenses[10]) {
    return ``
  } else if (license === licenses[11]) {
    return ``
  } else if (license === licenses[12]) {
    return ``
  } else if (license === licenses[13]) {
    return ``
  } else if (license === licenses[14]) {
    return ``
  } else if (license === licenses[15]) {
    return ``
  } else if (license === licenses[16]) {
    return ``
  } else if (license === licenses[17]) {
    return ``
  } else if (license === licenses[18]) {
    return ``
  } else {
    return ''
  }
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Table of Contents
    * Description
    * Technologies Used
    * Installation
    * Collaborators
    * License
  
  ## Description
  ${data.descriptionInput}

  ## Technologies Used
  ${data.technologiesInput}

  ## Installation
  ${data.installationInput}

  ## Collaborators
  ${data.creditsInput}

  ## License 
  ${data.licenseInput}
  
`;
}

module.exports = generateMarkdown;
