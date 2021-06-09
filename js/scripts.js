function add(number1, number2) {
  return number1 + number2;
}

function subtract(number1, number2) {
  return number1 - number2;
}

function multiply(number1, number2) {
  return number1 * number2;
}

function divide(number1, number2) {
  return number1 / number2;
}

function fToC(number1) {
  return ((number1 - 32) * 5) / 9;
}

function galToLit(number1) {
  return number1 / 3.78541;
}


//back (business logic) end stuff. 👆


//front (user interface logic) end stuff. 👇

//Here are some prompts.
const number1 = prompt("Enter a number:");
const number2 = prompt("Enter another number:");

//specify which operation will occur.
const result = galToLit(number1, number2);

//shows the user what is up my cool gangster friend buddy pal.
alert(result);