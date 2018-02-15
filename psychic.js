var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guessesMade= []
var letters = ["a", "b", 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var secretLetter;

function init () {
secretLetter = letters[Math.floor(Math.random() * 26)];
console.log (secretLetter);
guessesLeft = 10;
document.getElementById('guesses-left').textContent = ['Guesses left: '+guessesLeft];
guessesMade= []
document.getElementById('guesses-made').textContent = ['Guesses made: ' +guessesMade];
}


init ();

document.onkeyup = function (event) {
    if (event.key === secretLetter) {
        console.log('correct!')
        ++wins
        document.getElementById('wins').textContent = ["wins: " +wins]
    } else {
        console.log('incorrect');
        --guessesLeft;
        document.getElementById('guesses-left').textContent = ['Guesses left: '+guessesLeft];
        guessesMade.push(event.key);
        document.getElementById("guesses-made").textContent = guessesMade;

        if (guessesLeft===0) {
            ++losses
            document.getElementById('losses').textContent= ['losses: ' +losses];
            init();
        }

        
    }
}

