// UI Logic 

function getAndSetShout() {
  const shoutInput = document.getElementById("shout-input").value
  document.querySelector("p").innerText = shoutInput.toUpperCase()
}

let font = 1;
function increaseFontSize() {
  // let font = parseInt(document.querySelector("p").style.fontSize.slice(1))
  font += 5
  console.log(font)
  document.querySelector("p").style.fontSize = font.toString() + "px"
  // console.log(document.querySelector("p").style.fontSize)
}


window.onload = function() {
  // console.log("This script is running!");
  let form = document.querySelector("form");
  form.onsubmit = function(event) {
    event.preventDefault();
    getAndSetShout();
    increaseFontSize();
  }
}