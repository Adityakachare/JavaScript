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