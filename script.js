//select elements from the DOM
const toggleButton = document.getElementById("modeToggle");
const body = document.body;

//even listener for button click
toggleButton.addEventListener("click", function(){

    //Toggle theme classes on body
    body.classList.toggle("dark-mode");
    body.classList.toggle("light-mode");

    //update button text dynamically
    if(body.classList.contains("dark-mode")) {
        toggleButton.textContent = "Switch to light Mode";        
    } else {
        toggle.button.textContent = "Switch to dark mode"
    }
});