document.getElementById("heading").innerHTML = localStorage["title"] || "Just Write"; // default text
document.getElementById("heading").innerHTML = localStorage["text"] || "This text is automatically saved every second :)"; // default text

setInterval(function() {
    // function that is saving the innerHTML of the div
    localstorage["title"] = document.getElementById("heading").innerHTML; //heading div
    localStorage["text"] = document.getElementById("content").innerHTML; //content div
}, 1000);

// app tutorial taken from 
// https://enlight.nyc/projects/text-editor/