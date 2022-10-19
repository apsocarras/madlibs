// UI Logic 

function getAndSetShout() {
  const shoutInput = document.getElementById("shout-input").value;

  document.querySelector("p").innerText = shoutInput.toUpperCase();
}

window.onload = function() {
  // console.log("This script is running!");
  let form = document.querySelector("form");
  form.onsubmit = function(event) {
    event.preventDefault();
    getAndSetShout();
  }
}