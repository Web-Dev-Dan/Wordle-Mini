
const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',];

const words = ['cat', 'dog', 'ant', 'art', 'ham', 'hat'];

// Random Word
const randomNumber = Math.floor(Math.random() * words.length);
let randomWord = words[randomNumber];
let randomWordArray = randomWord.split('');

// User Guess
let userGuess = [];

// Turn Number
let turn = 1;
let currentLetter = 0;

// Grid
const top1 = document.querySelector('.top-1');
const top2 = document.querySelector('.top-2');
const top3 = document.querySelector('.top-3');
const mid1 = document.querySelector('.mid-1');
const mid2 = document.querySelector('.mid-2');
const mid3 = document.querySelector('.mid-3');
const bot1 = document.querySelector('.bot-1');
const bot2 = document.querySelector('.bot-2');
const bot3 = document.querySelector('.bot-3');




document.addEventListener('keydown', keyPress);


function keyPress(e) {
  
    // Letter Pressed
    if (alphabet.includes(e.key) && userGuess.length !== 3) {
        userGuess.push(e.key);
        currentLetter = userGuess.length;
        console.log(currentLetter);
        console.log(userGuess);
        console.log(`Turn: ${turn}. Letter: ${currentLetter}.`);
        addLetter(e.key);
    }

    else if (e.key === 'Backspace' && currentLetter > 0) {
        userGuess.pop();
        console.log(userGuess);
        currentLetter -= 1;
        console.log(`Turn: ${turn}. Letter: ${currentLetter}.`);
        deleteLetter();
    }

    else if (e.key === 'Enter' && userGuess.length === 3) {
        console.log(userGuess.join(''));
        checkGuess();
        userGuess = [];
        turn += 1;
    }
}



function addLetter(letter) {
    // First Row
    if (turn === 1) {
        if (currentLetter === 1) {
            top1.textContent = letter.toUpperCase();
        } else if (currentLetter === 2) {
            top2.textContent = letter.toUpperCase();
        } else if (currentLetter === 3) {
            top3.textContent = letter.toUpperCase();
        }
    }

    // Second Row
    if (turn === 2) {
        if (currentLetter === 1) {
            mid1.textContent = letter.toUpperCase();
        } else if (currentLetter === 2) {
            mid2.textContent = letter.toUpperCase();
        } else if (currentLetter === 3) {
            mid3.textContent = letter.toUpperCase();
        }
    }

    // Third Row
    if (turn === 3) {
        if (currentLetter === 1) {
            bot1.textContent = letter.toUpperCase();
        } else if (currentLetter === 2) {
            bot2.textContent = letter.toUpperCase();
        } else if (currentLetter === 3) {
            bot3.textContent = letter.toUpperCase();
        }
    }
}


function deleteLetter() {
    // First Row
    if (turn === 1) {
        if (currentLetter < 0) {
            return;
        } else if (currentLetter === 0) {
            top1.textContent = '';
        } else if (currentLetter === 1) {
            top2.textContent = '';
        } else if (currentLetter === 2) {
            top3.textContent = '';
        }
    }

    // Second Row
    else if (turn === 2) {
        if (currentLetter < 0) {
            return;
        } else if (currentLetter === 0) {
            mid1.textContent = '';
        } else if (currentLetter === 1) {
            mid2.textContent = '';
        } else if (currentLetter === 2) {
            mid3.textContent = '';
        }
    }

    // Third Row
    else if (turn === 3) {
        if (currentLetter < 0) {
            return;
        } else if (currentLetter === 0) {
            bot1.textContent = '';
        } else if (currentLetter === 1) {
            bot2.textContent = '';
        } else if (currentLetter === 2) {
            bot3.textContent = '';
        }
    }
}



function checkGuess(guess) {
    if (userGuess.join('') === randomWord) {
        console.log('Congratulations!');
    }


    if (turn === 1) {
        // Correct
        if (randomWordArray[0] === userGuess[0]) {
            top1.classList.add('correct');
        }
        if (randomWordArray[1] === userGuess[1]) {
            top2.classList.add('correct');
        }
        if (randomWordArray[2] === userGuess[2]) {
            top3.classList.add('correct');
        }

        // Wrong / Wrong Location
        if (randomWordArray[0] !== userGuess[0]) {
            if (randomWordArray.includes(userGuess[0])) {
                top1.classList.add('wrong-location');
            } else {
                top1.classList.add('wrong');
            }
        }
        if (randomWordArray[1] !== userGuess[1]) {
            if (randomWordArray.includes(userGuess[1])) {
                top2.classList.add('wrong-location');
            } else {
                top2.classList.add('wrong');
            }
        }
        if (randomWordArray[2] !== userGuess[2]) {
            if (randomWordArray.includes(userGuess[2])) {
                top3.classList.add('wrong-location');
            } else {
                top3.classList.add('wrong');
            }
        }
    }

    else if (turn === 2) {
        // Correct
        if (randomWordArray[0] === userGuess[0]) {
            mid1.classList.add('correct');
        }
        if (randomWordArray[1] === userGuess[1]) {
            mid2.classList.add('correct');
        }
        if (randomWordArray[2] === userGuess[2]) {
            mid3.classList.add('correct');
        }

        // Wrong / Wrong Location
        if (randomWordArray[0] !== userGuess[0]) {
            if (randomWordArray.includes(userGuess[0])) {
                mid1.classList.add('wrong-location');
            } else {
                mid1.classList.add('wrong');
            }
        }
        if (randomWordArray[1] !== userGuess[1]) {
            if (randomWordArray.includes(userGuess[1])) {
                mid2.classList.add('wrong-location');
            } else {
                mid2.classList.add('wrong');
            }
        }
        if (randomWordArray[2] !== userGuess[2]) {
            if (randomWordArray.includes(userGuess[2])) {
                mid3.classList.add('wrong-location');
            } else {
                mid3.classList.add('wrong');
            }
        }
    }


    else if (turn === 3) {
        // Correct
        if (randomWordArray[0] === userGuess[0]) {
            bot1.classList.add('correct');
        }
        if (randomWordArray[1] === userGuess[1]) {
            bot2.classList.add('correct');
        }
        if (randomWordArray[2] === userGuess[2]) {
            bot3.classList.add('correct');
        }

        // Wrong / Wrong Location
        if (randomWordArray[0] !== userGuess[0]) {
            if (randomWordArray.includes(userGuess[0])) {
                bot1.classList.add('wrong-location');
            } else {
                bot1.classList.add('wrong');
            }
        }
        if (randomWordArray[1] !== userGuess[1]) {
            if (randomWordArray.includes(userGuess[1])) {
                bot2.classList.add('wrong-location');
            } else {
                bot2.classList.add('wrong');
            }
        }
        if (randomWordArray[2] !== userGuess[2]) {
            if (randomWordArray.includes(userGuess[2])) {
                bot3.classList.add('wrong-location');
            } else {
                bot3.classList.add('wrong');
            }
        }
    }

}
