// Function to clone position input group
function addPositionInput() {
    const positionGroup = document.querySelector('.result-item').cloneNode(true);
    document.getElementById('results-container').insertBefore(positionGroup, document.getElementById('add-position'));
}

// Add functionality to 'Add Another Position' button
document.getElementById('add-position').addEventListener('click', addPositionInput);

document.getElementById('add-result').addEventListener('click', function() {
    const programId = document.getElementById('program-id').value;
    const programName = document.getElementById('program-name').value;

    let resultHTML = `
        <div id="${programId}" class="overlay">
            <div class="popup">
                <h2>Zafaria 2k24</h2>
                <a class="close" href="#">&times;</a>
                <div class="content">
                    <img src="/logo.png"
                        style="width: 100px; height: 100px; display:block; margin-left: auto; margin-right: auto; margin-top: 20px;">
                    <h5 style="text-align: center; margin-bottom: 20px;">${programName}</h5>
                    <div class="container">
                        <hr style="background-color: #0e0e0e; height: 1px; border-radius: 20px;">
                        <div class="row">
    `;

    // Loop through all the result items (multiple positions)
    const resultItems = document.querySelectorAll('.result-item');
    resultItems.forEach(item => {
        const studentName = item.querySelector('.student-name').value;
        const teamName = item.querySelector('.team-name').value;
        const positionElement = item.querySelector('.position');
        const position = positionElement.value;
        const positionImg = positionElement.options[positionElement.selectedIndex].getAttribute('data-img-url');

        resultHTML += `
            <div class="col-sm" style="text-align: center;">
                <img src="${positionImg}" style="width: 100px; height: 100px;">
                <h3>${studentName} - ${teamName}</h3>
                <p>${position}</p>
            </div>
        `;
    });

    resultHTML += `
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    document.getElementById('generated-results').insertAdjacentHTML('beforeend', resultHTML);
});

document.getElementById('download-html').addEventListener('click', function() {
    // Gather all the generated HTML
    const resultsContainer = document.getElementById('generated-results');
    const resultsHTML = resultsContainer.innerHTML.trim(); // Ensure no blank spaces are included

    if (resultsHTML) {
        // Create the blob with text content
        const blob = new Blob([resultsHTML], { type: 'text/plain' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'results.txt';  // Save as .txt file
        link.click();
    } else {
        alert("No results to download. Please add results first.");
    }
});
// Function to download results as text file
document.getElementById('download-html').addEventListener('click', function() {
    const resultsContainer = document.getElementById('generated-results');
    const resultsHTML = resultsContainer.innerHTML.trim(); // Ensure no blank spaces are included

    if (resultsHTML) {
        // Create the blob with text content for results
        const blob = new Blob([resultsHTML], { type: 'text/plain' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'results.txt';  // Save as results.txt file
        link.click();
    } else {
        alert("No results to download. Please add results first.");
    }
});

// Function to download program list as a separate text file
document.getElementById('download-html').addEventListener('click', function() {
    const programName = document.getElementById('program-name').value.trim();
    const programId = document.getElementById('program-id').value.trim();

    if (programName,programId) {
        // Create <li> list item with the program name
        const listContent = `<li><a href="#${programId}">${programName}</a></li>`;
        
        // Create blob with the list content
        const blob = new Blob([listContent], { type: 'text/plain' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'list.txt';  // Save as list.txt file
        link.click();
    } else {
        alert("Please enter a program name.");
    }
});
