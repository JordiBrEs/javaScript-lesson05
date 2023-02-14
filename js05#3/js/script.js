// Listen for an event with the modalX variable.
// Use the event handler to remove the “show-modal”
// class and to change the button text back to
//  “Who’s got this?”.
// Save and reload to test the button.
// You can click the X in the top right
// corner of the modal to close it.
var button = document.querySelector(".got-this");
var modal = document.querySelector(".modal");
var modalx = document.querySelector(".modal-x");

button.addEventListener("click", function () {
  modal.classList.add("show-modal");
  // button.classList.add("show-modal");
  // modal.style.display = "block";
  button.innerText = "You";
});

modalx.addEventListener("click", function () {
  modal.classList.remove("show-modal");
  button.innerText = "Who's got this?";
  // button.classList.remove("show-modal");
  // modal.style.display = "none";
});
