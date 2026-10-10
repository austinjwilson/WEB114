"use strict";
// Data Type: string
// Explanation: Because this has no numbers and it's a string.
const name = "Austin";

// Data Type: string
// Explanation: No numbers, so it will be a string.
const favoriteColor = "Red";

// Data Type: string
// Explanation: No numbers, it is a string.
const favoriteFood = "Pizza";

// Data Type: string
// Explanation: There are no numbers, it will be a string.
const favoriteAnimal = "Dog";

// Data Type: string
// Explanation: There are no numbers nor a boolean, it will be a string.
const favoriteSeason = "Winter";

// Data Type: integer, number
// Explanation: This will be an interger since age has no decimals and it is a number.
const age = 37;

// Data Type: boolean
// Explanation:
const isStudent = true;

let phrase = "likes ";
let phrase2 = "loves ";
let phrase3 = "in the ";

console.log(name + " " + age + phrase + favoriteFood);
console.log(`${name} ${age} ${phrase2} ${favoriteFood} ${phrase3} ${favoriteSeason}.`);
// 1. Which data type was easiest to choose? Why?
// Ans: Any charachter will end up being a string for this one.
// 2. Which variable was hardest to decide a data type for?
// Ans: isStudent, there are too many user test case scenarios for the data type to be boolean.     
// 3. What happens if a number is stored as a string in JavaScript?
// Ans: It will show as a character of a string rather than a number.
// 4. Why is it helpful to plan data types before coding?
// Ans: It helps with the organization of how the data types are going to be declared. Leaves out second guessing if it will be a string, number, or boolean.
