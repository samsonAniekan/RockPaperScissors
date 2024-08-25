//generate first

// let computerSelection;
    const rockImage = document.querySelector(".rock-image");
    const paperImage = document.querySelector(".paper-image");
    const scissorsImage = document.querySelector(".scissors-image");
    const playerChar = document.querySelector(".player-char");
    const computerChar = document.querySelector(".computer-char");
    const playerScore = document.querySelector(".player-scores");
    const computerScore = document.querySelector(".computer-scores");
    const displayedMessage = document.querySelector(".displayed-message-cls");
    const outputMessage = document.querySelector(".output-message-cls");

    let updateScore = 0;

    function computerMoves() {
    let computerChoice;
    let computeComputerScore = Math.random();

    if(computeComputerScore >= 0 && computeComputerScore <= 1 / 3) {
    computerChoice = "rock";
    console.log(computeComputerScore);
    computerChar.innerHTML = `<p class ="rock-selector">✊</p>`
    } else if (computeComputerScore > 1/3 && computeComputerScore <= 2/3) {
    computerChoice = "paper";
    console.log(computeComputerScore)
     computerChar.innerHTML = `<p class ="rock-selector">✋</p>`;
    } else if (computeComputerScore >= 2/3 && computeComputerScore < 1) {
    computerChoice = "scissors"
    computerChar.innerHTML =  `<p class ="rock-selector">✌</p>`;
    console.log(computeComputerScore);
    }

    return computerChoice;
}

    function playGameRock(playerMove) {
        const computerChoice = computerMoves()
        let result;
        playerChar.innerHTML =  `<p class ="rock-selector">✊</p>`;
        if (playerMove === "rock") {
            if(computerChoice === "rock") {
                result = "a tie";
                displayedMessage.textContent = `Its a tie rock ties with ${playerMove}`;
            } else if (computerChoice === "paper") {
                result = "you lose";
                computerScore.innerHTML = `<p class="computer-scores">Computer: ${++updateScore}</p>`;
            } else if (computerChoice === "scissors") {
                result = "you win";
                playerScore.innerHTML = `<p class="player-scores">Player:${++updateScore}</p>`

            }
            console.log(result);
        }



    }

    function playGameScissors(playerMove) {
        const computerChoice = computerMoves()
        let result;
        playerChar.innerHTML = `<p class ="rock-selector">✌</p>`;
        if (playerMove === "scissors") {
            if(computerChoice === "scissors") {
                result = "a tie"

            } else if (computerChoice === "rock") {
                result = "you lose"
                computerScore.innerHTML = `<p class="computer-scores">Computer: ${++updateScore}</p>`;
            } else if (computerChoice === "paper") {
                result = "you win"
                playerScore.innerHTML = `<p class="player-scores">Player: ${++updateScore}</p>`
            }
            console.log(result);
        }


    }

    function playGamePaper(playerMove) {
        const computerChoice = computerMoves()
        let result;
        playerChar.innerHTML = `<p class ="rock-selector">✋</p>`;
        if (playerMove === "paper") {
            if(computerChoice === "paper") {
                 result = "a tie";
            } else if (computerChoice === "rock") {
                result = "you win";
            } else if (computerChoice === "scissors") {
                result = "you lose";
            }
            console.log(result);
        }

    }


    rockImage.addEventListener("click", function () {
        playGameRock("rock");
    })
    paperImage.addEventListener("click", function() {
        playGamePaper("paper");
    });
    scissorsImage.addEventListener("click", function() {
        playGameScissors("scissors");
    });


// rockImage.forEach((el) => el.addEventListener("click", () => playGame("rock")))

//.compare results
//document.querySelector(".player-score").innerHTML = `<p class ="rock-selector">✊</p>`;
