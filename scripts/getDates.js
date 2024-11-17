document.addEventListener('DOMContentLoaded', function () {
    // Update year and last modified
    const yearElement = document.getElementById('year');
    yearElement.textContent = new Date().getFullYear();

    const lastModifiedElement = document.getElementById('lastModified');
    const lastModifiedDate = new Date(document.lastModified);
    lastModifiedElement.textContent = `Last Modified: ${lastModifiedDate.toLocaleDateString('en-US')}`;

    // Hamburger Menu Functionality
    const menuToggle = document.getElementById('menuToggle');
    const menu = document.getElementById('menu'); // Corrected selector

    menuToggle.addEventListener('click', () => {
        menu.classList.toggle('show'); // Toggle visibility
        menuToggle.textContent = menu.classList.contains('show') ? '✖' : '☰'; // Toggle button icon
    });

    // Dark Mode Toggle
    const darkModeToggle = document.getElementById('darkModeToggle');
    const mainArea = document.querySelector('main');

    // Load initial state from local storage
    const darkModeEnabled = localStorage.getItem('darkMode') === 'true';
    if (darkModeEnabled) {
        mainArea.classList.add('dark-mode');
        darkModeToggle.textContent = '☀️'; // Update button icon
    }

    darkModeToggle.addEventListener('click', () => {
        mainArea.classList.toggle('dark-mode'); // Toggle dark mode
        const isDarkMode = mainArea.classList.contains('dark-mode');
        darkModeToggle.textContent = isDarkMode ? '☀️' : '🌙'; // Update button icon
        localStorage.setItem('darkMode', isDarkMode); // Save preference
    });
});
