document.addEventListener('DOMContentLoaded', function() {
    const yearElement = document.getElementById('year');
    yearElement.textContent = new Date().getFullYear();

    const lastModifiedElement = document.getElementById('lastModified');
    const lastModifiedDate = new Date(document.lastModified);
    
    const formattedDate = lastModifiedDate.toLocaleDateString('en-US');
    
    lastModifiedElement.textContent = `Last Modified: ${formattedDate}`;
});
