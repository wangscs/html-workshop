// Create a variable to access the box elements
const notes = document.getElementsByClassName("box");

function playNote(e) {
    const note = document.getElementById(e+"Audio");
    note.currentTime = 0;
    note.play();
}
