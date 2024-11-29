document.addEventListener("DOMContentLoaded", () => {
    const msToDays = 1000 * 60 * 60 * 24; // Conversion factor: milliseconds to days
    const visitMessage = document.getElementById("visitMessage");
    const today = Date.now(); // Current time in milliseconds
    const lastVisit = localStorage.getItem("lastVisit"); // Retrieve the last visit from localStorage

    if (!lastVisit) {
        // First visit
        visitMessage.textContent = "Welcome! Let us know if you have any questions.";
    } else {
        const daysDifference = Math.floor((today - lastVisit) / msToDays); // Calculate days difference
        if (daysDifference < 1) {
            visitMessage.textContent = "Back so soon! Awesome!";
        } else if (daysDifference === 1) {
            visitMessage.textContent = "You last visited 1 day ago.";
        } else {
            visitMessage.textContent = `You last visited ${daysDifference} days ago.`;
        }
    }

    // Update the current visit in localStorage
    localStorage.setItem("lastVisit", today);

    // Lazy loading for images
    const images = document.querySelectorAll('img[loading="lazy"]');
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src; // Load the image from the data-src attribute
                img.removeAttribute("data-src"); // Remove the data-src attribute
                observer.unobserve(img); // Stop observing the image
            }
        });
    });

    images.forEach(img => observer.observe(img));
});
