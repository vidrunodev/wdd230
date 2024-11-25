document.addEventListener("DOMContentLoaded", () => {
    // Update Last Modified Date
    document.getElementById("lastModified").textContent = new Date(document.lastModified).toLocaleDateString();

    // Visit Count
    const visitCount = localStorage.getItem("visitCount") || 0;
    localStorage.setItem("visitCount", Number(visitCount) + 1);
    document.getElementById("visitCount").textContent = Number(visitCount) + 1;

    // Hamburger Menu Toggle
    const menuToggle = document.getElementById("menuToggle");
    const menu = document.getElementById("menu");

    menuToggle.addEventListener("click", () => {
        menu.classList.toggle("show");
    });

    // Dark Mode Toggle
    const darkModeToggle = document.getElementById("darkModeToggle");
    const body = document.body;

    const darkModeEnabled = localStorage.getItem("darkMode") === "true";
    if (darkModeEnabled) {
        body.classList.add("dark-mode");
        darkModeToggle.textContent = "☀️";
    }

    darkModeToggle.addEventListener("click", () => {
        body.classList.toggle("dark-mode");
        const isDarkMode = body.classList.contains("dark-mode");
        darkModeToggle.textContent = isDarkMode ? "☀️" : "🌙";
        localStorage.setItem("darkMode", isDarkMode);
    });
});
