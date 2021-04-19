/**
 * Rainbow Piano
 *
 * Use HTML, CSS and JS to create a simple piano with 7 notes. Each key should be
 * a different color and all keys should have a hover effect. Clickin ga key on the piano
 * should play a note.
 */

window.onload=function(){
  for (let i = 0; i < 7; i++) {
    document.querySelectorAll(".keys")[i].addEventListener("click", function(){
      let buttonInnerHTML = this.innerHTML;
      makeSound(buttonInnerHTML);
    });
  }
}

function makeSound(key){
  switch(key){
    case "A":
      let audio1 = new Audio("/exercises/music_boxes/static/media/a_note.mp3");
      audio1.play();
      break;
    case "B":
      let audio2 = new Audio("/exercises/music_boxes/static/media/b_note.mp3");
      audio2.play();
      break;
    case "C":
      let audio3 = new Audio("/exercises/music_boxes/static/media/c_note.mp3");
      audio3.play();
      break;
    case "D":
      let audio4 = new Audio("/exercises/music_boxes/static/media/d_note.mp3");
      audio4.play();
      break;
    case "E":
      let audio5 = new Audio("/exercises/music_boxes/static/media/e_note.mp3");
      audio5.play();
      break;
    case "F":
      let audio6 = new Audio("/exercises/music_boxes/static/media/f_note.mp3");
      audio6.play();
      break;
    case "G":
      let audio7 = new Audio("/exercises/music_boxes/static/media/g_note.mp3");
      audio7.play();
      break;  
  }
}