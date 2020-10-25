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

function getPunchline(){
    punchlineDiv.innerHTML = punchline;
    punchlineDiv.classList.add('bubble');
    punchlineBtn.classList.toggle('hidden');
    newJokeBtn.classList.toggle('hidden');
}

// Setup an async function called getJoke
async function getJoke(){
    const url = "https://official-joke-api.appspot.com/jokes/programming/random";

    // Create a variable called jokePromise that fetches a joke from the API
    const jokePromise = await fetch(url);
    //create a variable called joke that consumes the json data
    const joke = await jokePromise.json();
    console.log(joke);

    // Get the setup from the joke and insert it into the setupDiv element
    setupDiv.innerHTML = joke[0].setup;

    /*
    Create a global variable called punchline which will store the current punchline
     and will be updated with each new joke
    Assign the current jokes punchline to the punchline variable.
    */
   punchline = joke[0].punchline
}