// List of items
const names = [
  "Finish Webdev Capstone Project",
  "Finalize High-Fi for the UX Demo Project",
  "Put High-Fi Version of the ConnectED into Wordpress",
  "Follow-up on internship applications",
  "Talk to Valen before Friday"
];

// Function to create the list dynamically
function createList() {
  const items = names.map(name => `<li>${name}</li>`).join('');
  const list = `<ul>${items}</ul>`;
  const listSection = document.getElementById('itemList');
  listSection.innerHTML = list;
}

// Function to apply stored preferences
function applyPreferences() {
  const theme = localStorage.getItem('theme') || 'light'; // Default to light theme
  const listStyle = localStorage.getItem('listStyle') || 'ul'; // Default to unordered list

  // Apply the theme class to the body
  document.body.classList.remove('light', 'dark', 'blue');
  document.body.classList.add(theme);

  // Set the list style
  const listSection = document.getElementById('itemList');
  if (listStyle === 'none') {
      listSection.innerHTML = `<ul style="list-style-type: none;">${names.map(name => `<li>${name}</li>`).join('')}</ul>`;
  } else if (listStyle === 'ol') {
      listSection.innerHTML = `<ol>${names.map(name => `<li>${name}</li>`).join('')}</ol>`;
  } else {
      listSection.innerHTML = `<ul>${names.map(name => `<li>${name}</li>`).join('')}</ul>`;
  }
}

// Event listener for theme selection
document.getElementById('themeSelector').addEventListener('change', (event) => {
  const selectedTheme = event.target.value;
  document.body.classList.remove('light', 'dark', 'blue');
  document.body.classList.add(selectedTheme);
  localStorage.setItem('theme', selectedTheme); // Save to localStorage
});

// Event listener for list style selection
document.getElementById('listStyleSelector').addEventListener('change', (event) => {
  const selectedListStyle = event.target.value;
  let listSection = document.getElementById('itemList');
  
  if (selectedListStyle === 'none') {
      listSection.innerHTML = `<ul style="list-style-type: none;">${names.map(name => `<li>${name}</li>`).join('')}</ul>`;
  } else if (selectedListStyle === 'ol') {
      listSection.innerHTML = `<ol>${names.map(name => `<li>${name}</li>`).join('')}</ol>`;
  } else {
      listSection.innerHTML = `<ul>${names.map(name => `<li>${name}</li>`).join('')}</ul>`;
  }

  localStorage.setItem('listStyle', selectedListStyle); // Save to localStorage
});

// Apply preferences on page load
document.addEventListener('DOMContentLoaded', () => {
  createList();
  applyPreferences();
});
