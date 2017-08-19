// Create a variable to access the box elements
var notes = document.getElementsByClassName("box");

function playNote(e) {
    var note = document.getElementById(e+"Audio");
    note.currentTime = 0;
    note.play();
}



/*
// Using JQuery
$(document).ready( function() {

   // This controls the button for the c note.

   // This variable calls the cNote audio element in the HTML.
   var cNote = document.getElementById('cAudio');

   // This turns our <div id= "c"> into a button that plays our audio file when the box is pressed.
   $('#c').mousedown(function(){

       // This is a property that scrubs the audio file back to its start.
       cNote.currentTime = 0;

       // This plays the audio file.
       cNote.play();
   });
});
**/