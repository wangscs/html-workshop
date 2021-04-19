/**
 * Memory Game
 *
 * Design a simple memory game.
 *  - Must have at least 16 cards (8 matches)
 *  - Cards are matched in pairs
 *  - Player can turn turnover 1 card at a time
 *  - Only 2 cards can be face-up at once.
 */
window.onload = function() {
    // console.log("here");
    // test();
  let len = 16
  for(let i = 0; i < len; i++){
    document.querySelectorAll(".box")[i].addEventListener("click", function(){
      this.className = " reveal";
    });
  }
}

function test() {
    console.log("here");
    document.querySelector(".box").className = "reveal";
    let allCards = document.querySelectorAll(".box");
    for(let i = 0; i < 16; i++){
        console.log(allCards[i]);
        allCards[i].className = "reveal";
    }
}
//   for(let i = 0; i < allCards.length; i++){
//     allCards[i].style.display = "block";
//   }


