function generateMarkdown(userResponses, userInfo) {

  let draftMarkdown = 
  ` ${userResponses.title}

  
  ${userResponses.description}
  `
 
  draftMarkdown += `
`;
  

  if (userResponses.installation !== '') {
  
  draftMarkdown +=
  `
  
  
  ${userResponses.installation}`
  };
  

  if (userResponses.usage !== '') {
  
  draftMarkdown +=
  
  `

  
  ${userResponses.usage}`
  };
  draftMarkdown +=
  `

  
  ${userResponses.license}
  `;
  
}

module.exports = generateMarkdown;

