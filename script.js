// script.js
function calculate(action) {
    const input = document.getElementById('input').value;
    const resultDiv = document.getElementById('result');
    const additionalSection = document.getElementById('additionalSection');

    if (action === 'add') {
        const result = parseFloat(input) + 10; // Example operation
        resultDiv.textContent = `Result: ${result}`;
        additionalSection.classList.add('hidden'); // Hide additional section
    } else if (action === 'subtract') {
        const result = parseFloat(input) - 10; // Example operation
        resultDiv.textContent = `Result: ${result}`;
        additionalSection.classList.add('hidden'); // Hide additional section
    } else if (action === 'showSection') {
        additionalSection.classList.toggle('hidden'); // Toggle visibility
        resultDiv.textContent = ''; // Clear result when showing section
    }
}
