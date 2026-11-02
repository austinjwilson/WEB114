/* Author: Austin Wilson
 * Date: 11/01/2026
 * Project: Favorite Month Checker
 */

"use strict";

// Function to get season based on the month
function getFavoriteMonth(favMonth) {
	switch (favMonth) {
		case "january":
		case "february":
		case "december":
			return "You love the winter months!";
		case "march":
		case "april":
		case "may":
			return "Spring is nice with everything blooming.";
		case "june":
		case "july":
		case "august":
			return "You enjoy the summer months!";
		case "september":
		case "october":
		case "november":
			return "Fall is fun with all of the colors.";
		default:
			return "Other months are intereseting too!";
	}
}

// Prompt user for their favorite month
const favMonth = prompt("What is your favorite month?");

// Handle cancel seperately
if (favMonth === null) {
    alert("You canceled the month checker.");
} else {
    const month = favMonth.trim().toLowerCase();
    const message = getFavoriteMonth(month);
    alert(message);
}
