document.addEventListener('DOMContentLoaded', function () {
    // Update year and last modified
    const yearElement = document.getElementById('year');
    yearElement.textContent = new Date().getFullYear();

    const lastModifiedElement = document.getElementById('lastModified');
    const lastModifiedDate = new Date(document.lastModified);
    lastModifiedElement.textContent = `Last Modified: ${lastModifiedDate.toLocaleDateString('en-US')}`;

    // Hamburger Menu Functionality
    const menuToggle = document.getElementById('menuToggle');
    const menu = document.getElementById('menu');

    menuToggle.addEventListener('click', () => {
        menu.classList.toggle('show');
        menuToggle.textContent = menu.classList.contains('show') ? '✖' : '☰';
    });

    // Dark Mode Toggle
    const darkModeToggle = document.getElementById('darkModeToggle');
    const mainArea = document.querySelector('main');
    const darkModeEnabled = localStorage.getItem('darkMode') === 'true';

    if (darkModeEnabled) {
        mainArea.classList.add('dark-mode');
        darkModeToggle.textContent = '☀️';
    }

    darkModeToggle.addEventListener('click', () => {
        mainArea.classList.toggle('dark-mode');
        const isDarkMode = mainArea.classList.contains('dark-mode');
        darkModeToggle.textContent = isDarkMode ? '☀️' : '🌙';
        localStorage.setItem('darkMode', isDarkMode);
    });

    // Visit Counter
    const visitCountElement = document.getElementById('visitCount');
    let visitCount = localStorage.getItem('visitCount') || 0;
    visitCount++;
    localStorage.setItem('visitCount', visitCount);
    visitCountElement.textContent = `Visit Count: ${visitCount}`;
});
