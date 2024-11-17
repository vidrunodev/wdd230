document.addEventListener('DOMContentLoaded', function () {
    // Update year and last modified
    const yearElement = document.getElementById('year');
    yearElement.textContent = new Date().getFullYear();

    const lastModifiedElement = document.getElementById('lastModified');
    const lastModifiedDate = new Date(document.lastModified);
    lastModifiedElement.textContent = `Last Modified: ${lastModifiedDate.toLocaleDateString('en-US')}`;

    // Dark Mode Toggle
    const darkModeToggle = document.getElementById('darkModeToggle');
    const mainArea = document.querySelector('main');

    // Load initial state from local storage (if available)
    const darkModeEnabled = localStorage.getItem('darkMode') === 'true';
    if (darkModeEnabled) {
        mainArea.classList.add('dark-mode');
        darkModeToggle.textContent = '☀️'; // Set to light mode icon
    }

    darkModeToggle.addEventListener('click', () => {
        mainArea.classList.toggle('dark-mode'); // Toggle dark mode
        const isDarkMode = mainArea.classList.contains('dark-mode');
        darkModeToggle.textContent = isDarkMode ? '☀️' : '🌙'; // Update button icon
        localStorage.setItem('darkMode', isDarkMode); // Save preference
    });
});
