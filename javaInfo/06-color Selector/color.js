let red = document.querySelector(".red");
let blue = document.querySelector(".blue");
let green = document.querySelector(".green");
let yellow = document.querySelector(".yellow");

let center = document.querySelector(".center");

let getColor = (elementSelected) => {
  return window.getComputedStyle(elementSelected).backgroundColor;
};

let colorChange = (element, color) => {
  return element.addEventListener("click", () => {
    center.style.background = color;
  });
};

colorChange(red, getColor(red));
colorChange(blue, getColor(blue));
colorChange(green, getColor(green));
colorChange(yellow, getColor(yellow));

/// below code done by me ///

// let getColor = (elementSelected) => {
//   return window.getComputedStyle(elementSelected).backgroundColor;
// };

// red.addEventListener("click", () => {
//   center.style.background = getColor(red);
// });

// blue.addEventListener("click", () => {
//   center.style.background = getColor(blue);
// });

// green.addEventListener("click", () => {
//   center.style.background = getColor(green);
// });

// yellow.addEventListener("click", () => {
//   center.style.background = getColor(yellow);
// });
