// UI Logic (alternative method)

// this function handles getting form values and 
// setting the values for the Mad Libs story
function getAndSetMadLibValues() {
  // in this section we get the value for each form input
  const person1Input = document.getElementById("person1Input").value;
  const person2Input = document.getElementById("person2Input").value;
  const animalInput= document.getElementById("animalInput").value;
  const exclamationInput = document.getElementById("exclamationInput").value;
  const verbInput = document.getElementById("verbInput").value;
  const nounInput = document.getElementById("nounInput").value;

  // then we set the story variables to the values we got from the form
  document.querySelector("span#person1a").innerText = person1Input;
  document.querySelector("span#person1b").innerText = person1Input;
  document.querySelector("span#person1c").innerText = person1Input;
  document.querySelector("span#person2a").innerText = person2Input;
  document.querySelector("span#person2b").innerText = person2Input;
  document.querySelector("span#animal").innerText = animalInput;
  document.querySelector("span#verb").innerText = verbInput;
  document.querySelector("span#noun").innerText = nounInput;
  document.querySelector("span#exclamation").innerText = exclamationInput;
}

window.onload = function() {
  let form = document.querySelector("form");
  form.onsubmit = function(event) {
    // notice that event.preventDefault() can be located anywhere within 
    // the onsubmit event handler
    event.preventDefault();
    // we call the new function in the onsubmit event handler
    getAndSetMadLibValues();
    document.querySelector("div#story").removeAttribute("class");
  };
};



