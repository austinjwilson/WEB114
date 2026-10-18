use strict;

// Setting Floating Sky City
const setting = "floating sky city";

//Welcome Message
alert(`Welcome, brave traveler to the ${setting}! 
I'm your guide Austin, and I'll help you create your own hero`);

//Character Name Assignment
const charName = prompt("What is your character's name?, Wanderer")?.trim() || "Wanderer";

//Pet Type Assignment
const petType = prompt(`What kind of pet or companion does ${charName} have? 
    (ex: wolf, dragon, or robot)`);

//Superpower
const superPower = prompt(`What superpower does ${charName} have?`);

//Years of Training

//Prompt before conversion
const trainingYearsQuestion = prompt(`How many years has ${charName} been trainging?
    (Enter a number)`);

//String to Number conversion
const traingingYears = Number(trainingYearsQuestion);

console.log(trainingYearsQuestion, typeof trainingYearsQuestion);
console.log(traingingYears,typeof traingingYears);

const powerLevel = traingingYears * 10;

//Likes Fighting Monsters
const likesFighting = confirm(`Does ${charName} like fighting monsters?
    Click OK for YES
    Click Cancel for NO`);

console.log(likesFighting, typeof likesFighting);

//Loading and Preparing Message
alert(`Gathering magic for ${charName}... almost ready!`);

//Final Character Profile
alert(`====================================
CHARACTER PROFILE
====================================

Name: ${charName}
Pet: ${petType}
Superpower: ${superPower}
Power Level: ${powerLevel}
Monster Fighter? ${likesFighting ? "Yes" : "No"}

${charName} lives in a ${setting}, where amazing adventures await.
With a ${petType} by their side, ${charName} uses the incredible power of ${superPower} to protect the city
and its people.

====================================`);