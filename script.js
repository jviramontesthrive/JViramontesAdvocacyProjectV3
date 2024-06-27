//query for button with an id "dark-mode-toggle"
let themeButton = document.getElementById("theme-button");

const toggleDarkMode = () => {
  document.body.classList.toggle("dark-mode");
}

// TODO: Register a 'click' event listener for the theme button
themeButton.addEventListener("click", toggleDarkMode);

// Set toggleDarkMode as the callback function.
