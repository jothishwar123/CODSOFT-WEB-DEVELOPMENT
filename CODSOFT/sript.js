let currentInput = '';
let previousInput = '';
let operator = null;

const display = document.getElementById('display');

// Append number to the display
function appendNumber(number) {
  currentInput += number;
  display.textContent = currentInput;
}

// Set the operator (+, -, *, /)
function setOperation(op) {
  if (currentInput === '') return; // Do nothing if there's no number
  if (previousInput !== '') {
    calculateResult(); // Calculate the result if there's a previous input
  }
  operator = op;
  previousInput = currentInput;
  currentInput = '';
}

// Calculate the result
function calculateResult() {
  let result;
  const prev = parseFloat(previousInput);
  const current = parseFloat(currentInput);

  if (isNaN(prev) || isNaN(current)) return;

  switch (operator) {
    case '+':
      result = prev + current;
      break;
    case '-':
      result = prev - current;
      break;
    case '*':
      result = prev * current;
      break;
    case '/':
      if (current === 0) {
        result = 'Error'; // Handle division by zero
      } else {
        result = prev / current;
      }
      break;
    default:
      return;
  }

  currentInput = result.toString();
  operator = null;
  previousInput = '';
  display.textContent = currentInput;
}

// Clear the display
function clearDisplay() {
  currentInput = '';
  previousInput = '';
  operator = null;
  display.textContent = '';
}