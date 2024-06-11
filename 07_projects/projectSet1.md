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