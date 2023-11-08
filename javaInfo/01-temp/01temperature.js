let result = confirm(
  "press ok to convert Fahrenheit to Celsius or press cancel to convert Celsius to Fahrenheit"
);
if (result === true) {
  let fahrenheit = prompt("Enter Fahrenheit", [100]);
  let celsius = ((fahrenheit - 32) * 5) / 9;
  alert(`celsius equivalent of ${fahrenheit} fahrenheit is ${celsius}`);
} else {
  let celsius = prompt("Enter Celsius", [0]);
  let fahrenheit = celsius * (9 / 5) + 32;
  alert(`Fahrenheit equivalent of ${celsius} Celsius is ${fahrenheit}`);
}
