let userInput = prompt("you want to convert currency to");
let dollars, rupees;

console.log(userInput, "--userO");

if (!userInput || userInput === "") {
  alert("Please enter a value");
} else {
  if (userInput === "dollars" || "Dollars") {
    rupees = prompt("Enter Rupees ");
    dollars = rupees * 0.012;
    alert(`${rupees} Rupees is equal to ${dollars} Dollars`);
  }

  if (userInput === "Rupees" || "rupees" || "rs") {
    dollars = prompt("Enter Dollars ");
    rupees = dollars * 83;
    alert(`${dollars} Dollars is equal to ${rupees} Rupees`);
  }
}

// dollars = prompt("enter in dollars");
// rupees = dollars * 83;
// alert(`${dollars} Dollars is ${rupees} Indian Rupees`);
