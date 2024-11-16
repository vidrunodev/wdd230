// Get references to the input, button, and list elements
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector("#list");

// Add a click event listener to the Add Chapter button
button.addEventListener('click', () => {
    const chapter = input.value.trim(); // Trim input to avoid extra spaces
    if (chapter !== "") {
        // Create a new list item (li) element
        const listItem = document.createElement('li');
        listItem.textContent = chapter;

        // Create a delete button for the list item
        const deleteButton = document.createElement('button');
        deleteButton.textContent = '❌';
        deleteButton.classList.add('delete');

        // Append the delete button to the list item
        listItem.appendChild(deleteButton);

        // Append the list item to the unordered list
        list.appendChild(listItem);

        // Clear the input field and set focus back to it
        input.value = "";
        input.focus();

        // Add an event listener to the delete button to remove the item
        deleteButton.addEventListener('click', () => {
            list.removeChild(listItem);
        });
    } else {
        // Alert the user to enter a book and chapter
        alert("Please enter a book and chapter.");
        input.focus(); // Refocus on the input field
    }
});
