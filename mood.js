// Austin Wilson
// 11/22/2026
"use strict";

// Step 1 Select Emelents
const quoteDisplay = document.getElementById("quote");
const titleDisplay = document.getElementById("title");
const buttonContainer = document.getElementById("buttons");

// Step 2 Create Data Object
const moods = {
    happy: {
        name:"Happy",
        bg: '#FFD700',
        text: '#bd26b0',
        message: 'Warm smiles and the suns kisses!'
        },
    calm: {
        name:"Calm",
        bg: '#00CED1',
        text: '#f0ebeb',
        message: 'Peaceful and serene!'
        },
    angry: {
        name:"Angry",
        bg: '#FF0000',
        text: '#040404',
        message: 'Take a deep breath and count to 10!'
        },
    sleepy: {
        name:"Sleepy",
        bg: '#e96b10',
        text: '#649a73',
        message: 'Time for a nap!'
        }
};

// Step 3 Function that changes the page information
function handleMoodButtonClick(moodClick) {
    // A Checks which element is clicked
    if (moodClick.target.classList.contains("mood-btn")) {
        // B Get the selected mood
        const mood = moodClick.target.getAttribute("data-mood");
        // C Find the mood settings
        const moodSettings = moods[mood];
        // Step 3b: Update Page
        document.body.style.backgroundColor = mood.bg;
        document.body.style.color = mood.text;
        quoteDisplay.textContent = quote;
        titleDisplay.textContent = mood.name;

        //Conole log tests
        console.log("Mood selected: " + moodName);
        console.log("Mood settings: " + mood);
    }
}