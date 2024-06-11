# Projects related to DOM

## Project link:
[StackBlitz Link](https://stackblitz.com/edit/stackblitz-starters-ph2tdr?description=HTML/CSS/JS%20Starter&file=1-ColorSwitcher%2Findex.html,1-ColorSwitcher%2Fstyle.css,1-ColorSwitcher%2Fscript.js&terminalHeight=10&title=Static%20Starter)

# Solution Code:
## Project - 1:
```javascript
const allButtons = document.querySelectorAll('.button');
//console.log(allButtons);
const body = document.querySelector('body');

allButtons.forEach(function (button) {
  //console.log(button);
  button.addEventListener('click', function (event) {
    console.log(event);
    console.log(event.target);

    if (event.target.id === 'grey') {
      body.style.backgroundColor = event.target.id;
    } else if (event.target.id === 'red') {
      body.style.backgroundColor = event.target.id;
    } else if (event.target.id === 'blue') {
      body.style.backgroundColor = event.target.id;
    } else if (event.target.id === 'green') {
      body.style.backgroundColor = event.target.id;
    } else if (event.target.id === 'yellow') {
      body.style.backgroundColor = event.target.id;
    }
  });
});

```

## Project - 2:
```javascript
const form = document.querySelector('form');

//const height = parseInt(document.querySelector('#height').value); //This will give you empty values
form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  //console.log(height);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');
  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `ENTER VALID HEIGHT ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `ENTER VALID WEIGHT ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //Show results:
    if (bmi < 18.6) {
      results.innerHTML = `<span>BMI is:${bmi}. You are under weight</span>`;
    } else if (bmi > 18.6 && bmi < 24.9) {
      results.innerHTML = `<span>BMI is:${bmi}. NORMAL</span>`;
    }
    if (bmi > 24.9) {
      results.innerHTML = `<span>BMI is:${bmi}. You are Over weight</span>`;
    }
  }
});

```

## Project - 3:
```javascript
const clock = document.getElementById('clock');

setInterval(function () {
  let date = new Date();
  //console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);

```

## Project - 4:
```javascript
let randoNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHigh = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    //console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  //This function will handle the validation of guesses, whether the guess is between 1 to 100
  if (isNaN(guess)) {
    alert('Enter a valid number!');
  } else if (guess < 1) {
    alert('Enter a number greater than 1!');
  } else if (guess > 100) {
    alert('Enter a number smaller than 100!');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over, the random number was ${randoNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  //Will check the guessed value, if the guessed value is same then appropriate message will be displayed if the guess is low or high then respective message is printed
  if (guess === randoNumber) {
    displayMessage('You guessed it right!');
    endGame();
  } else if (guess < randoNumber) {
    displayMessage('Number is too low!');
  } else if (guess > randoNumber) {
    displayMessage('Number is too high!');
  }
}

function displayGuess(guess) {
  //Will work for updating the values of the array
  userInput.value = '';
  guessSlot.innerHTML += `${guess}  `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
  //Displaying the appropriate message
  lowOrHigh.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randoNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
  });
}

```