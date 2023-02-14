// Create three variables to select the span elements (“???”) in the footer.
// Use mouseover events to change the text of elements:
// Span with a class of “fans” → change the text to “123K”.
// Span with a class of “fish” → change the text to “47K”.
// Span with a class of “pets” → change the text to “20K”.

var fish = document.querySelector(".fish");
var fans = document.querySelector(".fans");
var pets = document.querySelector(".pets");

fish.addEventListener("mouseover", function () {
  fish.innerText = "123k";
});
fans.addEventListener("mouseover", function () {
  fans.innerText = "47k";
});
pets.addEventListener("mouseover", function () {
  pets.innerText = "20k";
});

var quincy = document.querySelector("h1");
var ball = document.querySelector(".ball");
var body = document.querySelector("body");
var toggle = document.querySelector("#toggle");
// Add an event listener to listen for a click event on the Dark/Light toggle input.
// Inside the function body, use an if statement
//  to find out if the body element has a class of "light".
//   If it does, remove it and the "move-right"
//   class applied to the "ball" element.
//   Change the text of the h1 to “Stealth Quincy”.
// // Use an else statement to add the "light" class
// to the body element and the "move-right" class
// to the "ball" div element. Change the text of the h1
// to “Party Quincy”.
// // Save and reload to test the toggle.
toggle.addEventListener("click", function () {
  if (body.classList.contains("light")) {
    body.classList.remove("light");
    ball.classList.remove("move-right");
    quincy.innerText = "Stealth Quincy";
  } else {
    body.classList.add("light");
    ball.classList.add("move-right");
    quincy.innerText = "Party Quincy";
  }
});
