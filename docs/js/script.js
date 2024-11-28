  // Check for saved theme preference
  const darkModeToggle = document.getElementById('darkModeToggle');
  const body = document.body;
  
  // Check if user has a saved preference
  if (localStorage.getItem('darkMode') === 'enabled') {
      body.classList.add('dark-mode');
      darkModeToggle.checked = true;
  }

  // Dark mode toggle function
  function toggleDarkMode() {
      if (darkModeToggle.checked) {
          body.classList.add('dark-mode');
          localStorage.setItem('darkMode', 'enabled');
      } else {
          body.classList.remove('dark-mode');
          localStorage.setItem('darkMode', 'disabled');
      }
  }