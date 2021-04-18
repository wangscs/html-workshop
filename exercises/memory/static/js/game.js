window.onload = function() {

    // FIXME: Set element variables for the following classes and ids:
    //   box, board, start, stop, message, rules and counter
    let boxes = document.querySelectorAll(".box"),
        board = document.querySelector(".board"),
        startButton = document.querySelector("#start"),
        stopButton = document.querySelector("#stop"),
        notification = document.querySelector(".message"),
        rules = document.querySelector("#rules"),
        counter = document.querySelector("#counter");

    // Set game variables
    let started = false,
        newBoard = [],
        cards = [],
        score = 0,
        pairs = 0,
        attempts = 0,
        noMatchTimeOut;

    // CHALLENGE: How can we use images instead?
    const tiles = ["a","b","c","d","e","f","g","h",
        "a","b","c","d","e","f","g","h"];


    stopButton.disabled = true;

    // Shuffle the tiles, inspired by Fisher-Yates
    // http://en.wikipedia.org/wiki/Fisher_Yates_shuffle
    function shuffle(o) {
        for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j]= x);
        return o;
    };

    function gameStart() {
        if (started === true) {
            startButton.classList.add('dimStart');
            stopButton.classList.remove('dimStop');
            startButton.disabled = true;
            stopButton.disabled = false;
        } else if (started === false) {
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
        for (let n = 0; n < boxes.length; n++) {
            boxes[n].innerHTML = newBoard[n];
        }
    };

    // Reset the game
    stopButton.onclick = function() {
        for (let b = 0; b < boxes.length; b++) {
            boxes[b].innerHTML = "";                // Empty the boxes
            boxes[b].classList.remove('reveal','match');  // Turn them over
            fancyText("Yummy ...a clean slate!",'fadeIn','fadeOut');
            board.classList.add('wobble');          // Shake the board on reset
            started = false;                        // Setup for reset
            gameStart();                            // Reset
            pairs = 0, score = 0, attempts = 0;     // Reset variables
            cards = [];                             // Reset cards
        }
    }

    // Check that the two currently selected cards match values
    function isMatch() {
        // Two conditions:
        //  Both cards have the same value AND
        //  They are not the same card (two different cards)
        if (cards[0].innerHTML === cards[1].innerHTML && cards[0] !== cards[1]) {
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

    function clearReveal() {
        cards[0].classList.remove('reveal');
        cards[1].classList.remove('reveal');
        cards = [];
        noMatchTimeOut = null;
    }

    // Check to see if the game is over. Are all cards matched?
    function gameOver() {
        // FIXME: Set the right condition for ending the game
        if (pairs == 8) {
            fancyText("YOU WON!","shake","fadeOut");
        }
    }

    // Have some fun with the player.
    function taunt() {
        let taunts = ["C'mon...", attempts + " tries. Really?", "OK, you can do this."];
        if (attempts % 3 === 0) {
            t = Math.floor(Math.random() * (taunts.length - 0));
            fancyText(taunts[t],"shake","zoomOut");
        }
    }

    // Main game loop
    for (let t = 0; t < boxes.length; t++) {
        // Listen for a card to be selected by the player ...
        boxes[t].onclick = function() {
            checkTimeout();

            if (this.classList.contains("match"))
            {
                return;
            }

            if (started === true) {
                // ...turn the card over
                this.classList.add('reveal');  // ...trun card over
                cards.push(this);              // ...add to cards list

                if (cards.length === 2) {
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
