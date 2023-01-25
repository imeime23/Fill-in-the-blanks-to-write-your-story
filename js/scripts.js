//window.onload = function() { This is part of the event Handler method

  // first we set up an event handler for the form submission  This is part of the event Handler method
  //let form = document.querySelector("form"); This is part of the event Handler method
  //form.onsubmit = function(event) { this is part of the event HANDELER method


window.addEventListener("load", function() {
  let form = document.querySelector("form");
  // we've accessed our button and story elements at the top level
  // of the window load event listener to reuse these elements
  // in multiple locations
  let resetBtn = document.getElementById("reset");
  let story = document.getElementById("story");

  // the original form submission event listener
  form.addEventListener ("submit", function(event) {
  
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

    // then we show the story by removing the class attribute, see below story.remove attribute("class);
    //document.querySelector("div#story").removeAttribute("class"); Event handler code, not listener

    // we prevent the default refresh action for the submit event
    // take note that we only need to call event.preventDefault();
    // once, even though there are 3 different event listeners for the 
    // form submission event
    story.removeAttribute("class");
    event.preventDefault();
  });

  // new event listener for form submit event to show reset button
  form.addEventListener("submit", function() {
    resetBtn.removeAttribute("class");
  }); 

  // new event listener for form submit event to show advertisement
  form.addEventListener("submit", function() {
    window.alert("Do you need a new computer? Visit www.superextracomputersales.com to find the best deals!");
  }); 

  // new event listener for click event on reset button to 
  // reset form values
  resetBtn.addEventListener("click", function() {
    story.setAttribute("class", "hidden");
    document.getElementById("person1Input").value = null;
    document.getElementById("person2Input").value = null;
    document.getElementById("animalInput").value = null;
    document.getElementById("exclamationInput").value = null;
    document.getElementById("verbInput").value = null;
    document.getElementById("nounInput").value = null;
  });
});
