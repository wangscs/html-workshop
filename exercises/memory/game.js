window.onload = function() {

    // FIXME: Set element variables for the following classes and ids:
    //   box, board, start, stop, message, rules and counter
    //   Use the querySelectorAll method!

    // Set game variables
    var started = false,
      newBoard = [],
      cards = [],
      score = 0,
      pairs = 0,
      attempts = 0,
      noMatchTimeOut;

    // FIXME: Create 16 card tiles -- two of each value
    // CHALLENGE: How can we use images instead?
    var tiles;


    stopButton.disabled = true;

    // Shuffle the tiles, inspired by Fisher-Yates
    // http://en.wikipedia.org/wiki/Fisher_Yates_shuffle
    function shuffle(o) {
        for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j]= x);
            return o;
    };

    function gameStart() {
        // FIXME: Check if the game is started
        if () {
            // FIXME: Add dimStart class
            startButton.classList // YOUR CODE HERE;
            stopButton.classList.remove('dimStop');
            // FIXME: Enable startButton

            // FIXME: Disable stopButton

        } else if (started == false) {
            startButton.classList.remove('dimStart');
            stopButton.classList.add('dimStop');
            startButton.disabled = false;
            stopButton.disabled = true;
            counter.innerHTML ="";
        }
    }

    // Change game messages and animate them!
    function fancyText(myMessage,classIn,classOut) {
        setTimeout(function() {
            notification.innerHTML = myMessage;
            notification.classList.add(classIn);
          }, 0);
        setTimeout(function() {
            notification.innerHTML = myMessage;
            notification.classList.add(classOut);
          }, 2000);
        notification.innerHTML = "";
        notification.classList.remove(classIn,classOut);
    }

    // Initiate a new game board
    startButton.onclick = function() {
        newBoard = shuffle(tiles);  // shuffle cards
        started = true;             // Set-up for gameStart
        attempts = 0;               // Reset attempts counter
        gameStart();                // Start
        board.classList.remove('wobble');
        for (var n = 0; n < boxes.length; n++) {
            // Set the value of each box to the card values
          boxes[n].innerHTML = newBoard[n];
        }
    };

    // Reset the game
    stopButton.onclick = function() {
        for (var b = 0; b < boxes.length; b++) {
          boxes[b].innerHTML = "";          // Empty the boxes
          boxes[b].classList.remove('reveal','match');  // Turn them over
          fancyText("Yummy ...a clean slate!",'fadeIn','fadeOut');
          board.classList.add('wobble');    // Shake the board on reset
          started = false;                  // Setup for reset
          gameStart();                      // Reset
          pairs = 0, score = 0, attempts = 0;  // Reset variables
          cards = [];                          // Reset cards
        }
    }

    // Check that the two currently selected cards match values
    function isMatch() {
        // Two conditions:
        //  Both cards have the same value AND
        //  They are not the same card (two different cards)
        if (cards[0].innerHTML == cards[1].innerHTML && cards[0] != cards[1]) {
            // ...update card status
            cards[0].classList.add('match');
            cards[1].classList.add('match');
            cards = [];  // Empty the card list
            fancyText("Match!","zoomIn","zoomOut");  // Notify player
            pairs++;  // Count the match!
        } else {
          noMatchTimeOut = setTimeout( function() {
            clearReveal();  // ...flip the card back over
            noMatchTimeOut = null;
          }, 500);
        }
    };

    function checkTimeout() {
        if(noMatchTimeOut != null)
        {
          clearTimeout(noMatchTimeOut);
          clearReveal();
        }
    }

    // FIXME: Create a function clearReveal that does the following:
    //      - Remove 'reveal' class from each card classList (2 cards)
    //      - Empty the cards list
    //      - Set value of noMatchTimeOut to null


    // Check to see if the game is over. Are all cards matched?
    function gameOver() {
        // FIXME: Set the right condition for ending the game
        if () {
          fancyText("YOU WON!","shake","fadeOut");
        }
    }

    // Have some fun with the player.
    function taunt() {
        var taunts = ["C'mon...", attempts + " tries. Really?", "OK, you can do this."];
        if (attempts % 3 === 0) {
          t = Math.floor(Math.random() * (taunts.length - 0));
          fancyText(taunts[t],"shake","zoomOut");
        }
    }

    // Main game loop
    for (var t = 0; t < boxes.length; t++) {
        // Listen for a card to be selected by the player ...
        boxes[t].onclick = function() {
          checkTimeout();

          if (this.classList.contains("match"))
          {
            return;
          }

          if (started == true) {
            this.classList.add('reveal');  // ...turn card over
            cards.push(this);              // ...add to cards list

            if (cards.length == 2) {
              attempts++;
              taunt();
              counter.innerHTML = attempts;
              isMatch(); // ...see if the two cards match
            }
          } else {
            fancyText("Press the start button.","flash","fadeOut");
          }
          gameOver();  // Check to see if all the cards are matched
        };
    }

  
  
}

// Extras