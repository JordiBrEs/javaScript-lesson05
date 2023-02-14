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
