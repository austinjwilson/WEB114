"use strict";

/* PLANNING / PSEUDOCODE

1. Initialize score = 0

2. Question 1: [Your question here-- see questions below}

    -Variable name personalized to question (no answer1)
   - Correct answer:
   - How I'll validate and check the answer :

3. Use that structure for all questions.

6. Math: How will I calculate the percentage?

7. Final feedback logic (if / else if / else):
*/
let score = 0;

// Question 1
const addQuestion = prompt("What is 5 + 3? ");
const addQuestionOutput = Number(addQuestion);

if (addQuestionOutput === 8) {
    alert("Correct!");
    score++;
} else {
    alert("Wrong! It's 8.")
}
// Question 2
const subQuestion = Number(prompt("What is 10 - 4? "));

if (subQuestion === 6) {
    alert("Correct!");
    score++;
} else {
    alert("Wrong! It's 6.")
}

// Question 3
const multQuestion = Number(prompt("What is 4 X 3? "));

if (multQuestion === 12) {
    alert("Correct!");
    score++;
} else {
    alert("Wrong! It's 12.")
}
// Question 4
const divQuestion = Number(prompt("What is 20 / 5? "));

if (divQuestion === 4) {
    alert("Correct!");
    score++;
} else {
    alert("Wrong! It's 4.")
}
// Question 5
let favColorQuestion = prompt("What is your favorite color? ");

if (favColorQuestion === null) {
    alert("You clicked cancel. No point awarded for this question.");
} else if (favColorQuestion.trim() === "") {
    alert("You didn't enter a color. No point awarded for this question.");
} else {
    favColorQuestion = favColorQuestion.trim().toLowerCase();

    // Check if the answer is correct
    if (favColorQuestion === "blue") {
        alert("Correct! Blue is a great color.");
        score++;
    } else {
        alert("Wrong! The correct answer is blue.");
    }
}
// Calculate percentage using math
const total = (score / 5) * 100;


// Special message if score is 3
if (score === 3) {
    alert(`Exactly three answers are correct.`);
}
// Final feedback using if / else if / else
if (score >= 4) {
    alert(`Excellent work!`);
} else if (score >= 3) {
    alert(`Good job! Almost there!`);
} else {
    alert(`Maybe next time! You'll get there!`);
}
// Final summary alert
alert(`Your score is ${score} out of 5. Your percentage is ${total}%.`);

console.log(`Final score: ${score}, Percentage: ${total}`);