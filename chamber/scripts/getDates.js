document.addEventListener("DOMContentLoaded", () => {
    // Update Last Modified Date
    const lastModifiedElement = document.getElementById("lastModified");
    if (lastModifiedElement) {
        lastModifiedElement.textContent = new Date(document.lastModified).toLocaleDateString();
    }

    // Hamburger Menu Toggle
    const menuToggle = document.getElementById("menuToggle");
    const menu = document.getElementById("menu");

    if (menuToggle && menu) {
        menuToggle.addEventListener("click", () => {
            menu.classList.toggle("show");
        });
    }
});
