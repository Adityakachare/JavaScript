let counter = 5;

const updateCounterDisplay = () => {
  document.getElementById(
    "counter-value"
  ).innerText = `Counter Value: ${counter}`;
};

const addValue = () => {
  counter++;
  updateCounterDisplay();
};

const removeValue = () => {
  counter--;
  updateCounterDisplay();
};

document.getElementById("add-value").addEventListener("click", addValue);
document.getElementById("remove-value").addEventListener("click", removeValue);

updateCounterDisplay(); // Initial display update
