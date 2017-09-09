window.onload = function() {
    var errors = document.getElementById("#errors");
    // Define variables named 'clearButton' and 'results' for clear and result elements.

    // Optional: Change the O's to Fros!
    // Create an img element sourced from the fro image

    // Load Audio files
    var youMad = new Audio();
    youMad.src = "media/youmad.mp3";
    youMad.load();

    var applause = new Audio();
    applause.src = "media/applause.mp3";
    applause.load();

    // Create a variable: Gather all boxes into an array

    // Create a very simplistic AI opponent
    var opponent = function() {
        // Get a random number from 1-9
        var o = Math.floor( (Math.random() * allBoxes.length) );
        console.log("Rolled a: ", o);
        // Give AI 5 seconds to make a move
        setTimeout(function() {

            if (!allBoxes[o].innerHTML) {
                allBoxes[o].innerHTML = "O";
                allBoxes[o].style.color = "#ffdb00";
            } else {
                // Recursion... start over again
                opponent();
            }
        }, 500);
    };

    // Game loop
    for (var b = 0; b < allBoxes.length; b++) {
        allBoxes[b].onclick = function() {
            if (this.innerHTML == "") {
                this.innerHTML = "X";
                this.style.color = "#06ff18";
            }

            // Check for win conditions
            // Create a variable for each box element
            var b1 = document.querySelector("#b1").innerHTML,
                b2 = document.querySelector("#b2").innerHTML,
                b3 = document.querySelector("#b3").innerHTML,
                b4 = document.querySelector("#b4").innerHTML,
                b5 = document.querySelector("#b5").innerHTML,
                b6 = document.querySelector("#b6").innerHTML,
                b7 = document.querySelector("#b7").innerHTML,
                b8 = document.querySelector("#b8").innerHTML,
                b9 = document.querySelector("#b9").innerHTML;

            // Define the missing win conditions
            if (b1 === "X" && b2 === "X" && b3 === "X" ||
                b3 === "X" && b6 === "X" && b9 === "X" ) {
                // Set the innerHTML of the results element to declare a winner!
                applause.play();

            }
            // Copy the win conditions from above but change the X to O
            // OPTIONAL: If you imported the fro image, use that instead!
            if (b1 === "O" && b2 === "O" && b3 === "O" ||
                b3 === "O" && b6 === "O" && b9 === "O" ) {
                // Set the innerHTML of the results element to declare a winner!
                youMad.play();
            }
            opponent();

        };
    }

    // Clear the game board and start over
    // Set the onclick property of clearButton to a function that puts an empty string in all boxes.
    clearButton.onclick = function() {
        try {
            for (SET_VAR; SET_CONDITION; SET_INCREMENT) {
                allBoxes[i].innerHTML;
                results.innerHTML = "";
            }
        }
        catch(err) {
            errors.innerHTML = err.name + ": " + err.message;
            console.error(err);
        }
    };
};
