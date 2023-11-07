firstNumber = prompt("Enter first number");
secondNumber = prompt("Enter second number");
operation = prompt("enter operation");

if (operation === "+") {
  answer = Number(firstNumber) + Number(secondNumber);
} else if (operation === "-") {
  answer = Number(firstNumber) - Number(secondNumber);
} else if (operation === "*") {
  answer = Number(firstNumber) * Number(secondNumber);
} else if (operation === "/") {
  answer = Number(firstNumber) / Number(secondNumber);
} else if (operation === "%") {
  answer = Number(firstNumber) % Number(secondNumber);
}

alert(`answer is ${answer}`);
