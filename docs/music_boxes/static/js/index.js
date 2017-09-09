// Create a variable to access the box elements
var notes = document.getElementsByClassName("box");

function playNote(e) {
    var note = document.getElementById(e+"Audio");
    note.currentTime = 0;
    note.play();
}
