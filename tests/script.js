// Get references to the input field, button, and output paragraph
const inputNumber = document.getElementById('inputNumber');
const clickButton = document.getElementById('clickButton');
const output = document.getElementById('output');

// Initialize a variable to keep track of the number of clicks
let clickCount = 0;

// Add click event listener to the button
clickButton.addEventListener('click', function() {
    // Get the value entered by the user
    const number = parseInt(inputNumber.value);

    // Check if the entered value is a valid number
    if (!isNaN(number) && number > 0) {
        // Increment clickCount
        clickCount++;

        // Check if clickCount is greater than the entered number
        if (clickCount > number) {
            output.textContent = "You have clicked the button more times than the entered number.";
            // Disable the button
            clickButton.disabled = true;
        } else {
            output.textContent = "You have clicked " + clickCount + " time(s) out of " + number + ".";
        }
    } else {
        output.textContent = "Please enter a valid positive number.";
    }
});
