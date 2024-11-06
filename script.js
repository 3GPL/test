// script.js

document.getElementById('searchButton').addEventListener('click', function() {
    // Get the user input
    const searchQuery = document.getElementById('searchInput').value.trim();
    
    // Display the result or a message if the input is empty
    if (searchQuery !== "") {
        document.getElementById('result').innerHTML = `<strong>You searched for:</strong> ${searchQuery}`;
    } else {
        document.getElementById('result').innerHTML = "Please enter something to search.";
    }
    
    // Optionally, clear the input field after submission
    document.getElementById('searchInput').value = "";
});
