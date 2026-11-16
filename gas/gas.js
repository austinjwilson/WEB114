/*
Author: Austin Wilson
Date: 11/15/2026
Project: Gas Average Calculator
*/

'use strict';

// Ask user for name
let username = prompt("Enter your name:");

// Check if user clicked Cancel
if (username !== null) {
    // Trim whitespace 
    username = username.trim();

    // Call CalcGasAvg function
    CalcGasAvg();
} else {
    // Alert user that they cancelled the prompt
    alert("You cancelled the name prompt.");
}

// Create function to calculate gas average
function CalcGasAvg() {
    // Initialize variables
    let total = 0;
    let count = 0;
    let gasAmount = 0;
    let average = 0;

    // Ask for first week's gas total and convert to float
    let gasInput = prompt("Enter your first week's gas total. Enter -1 when you are done.");
    
    // Check if user clicked Cancel
    if (gasInput === null) {
        alert("You cancelled the gas input prompt.");
        return;
    }

    gasAmount = parseFloat(gasInput);

    // Loop to get gas amounts until user enters -1
    while (gasAmount !== -1) {
        // Check if input is not a valid number or is negative (other than -1)
        if (isNaN(gasAmount) || gasAmount < 0) {
            alert("Invalid input. Please enter a valid number.");
            gasAmount = prompt("Invalid Entry. Please enter a positive number or -1 to finish:");
        } else {
            // Add valid gas amount to total and increment count
            total += gasAmount;
            count++;

            // Ask for next week's gas total
            gasAmount = prompt("Enter your next week's gas total. Enter -1 when you are done.");
        }

        // Check if user clicked Cancel
        if (gasAmount === null) {
            alert("You hit Cancel. The program has stopped.");
            return;
        }

        // Convert the next input to a float
        gasAmount = parseFloat(gasAmount);
    }

    // Check if there are entries and calculate average
    if (count > 0) {
        average = total / count;
    } else {
        average = 0;
    }

    // Display the results, Average gas total and total number of entries
    if (count === 0) {
        alert(username + "'s average weekly gas bill is $0.00.");
        alert("You entered "+ count + " gas totals.");
    } else {
        alert(`${username}'s average weekly gas bill is $${average.toFixed(2)}.`);
        alert("You entered "+ count + " gas totals.");
    }
}