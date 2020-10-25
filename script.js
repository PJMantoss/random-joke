//Variables
let punchline;
const setupDiv = document.getElementById("setup");
const punchlineDiv = document.getElementById("punchline");
const punchlineBtn = document.getElementById("punchlineBtn");
const newJokeBtn = document.getElementById("newJokeBtn");

//Event listener for the punchline button. When clicked it calls a function called getPunchline
/*  The getPunchline function: 
    Inserts the punchline into the punchlineDiv
    Adds the class "bubble" to the punchlineDiv
    Toggles the "hidden" class on both buttons.
*/

punchlineBtn.addEventListener("click", getPunchline);

//Event listener for the new joke button. When clicked it calls the getJoke function
newJokeBtn.addEventListener("click", getJoke);