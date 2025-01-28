humanScore = 0;
computerScore = 0;
humanChoice = "";
n = 0;

const main = document.querySelector("#main");

function initialState() {
    mainText = document.createElement("h1");
    mainText.textContent = "Welcome to rock paper scissors!";

    startButton = document.createElement("button");
    startButton.textContent = "Start";

    main.appendChild(mainText);
    main.appendChild(startButton);

    startButton.addEventListener("click", () => {
        main.removeChild(mainText);
        main.removeChild(startButton);
        humanChoiceState();
    })
}

function getComputerChoice() {
    x = Math.random(0,2) * 100;
    if (x <= 33) {
        xChoice = "r";
    } else if (x <= 66) {
        xChoice = "p" ;
    } else {
        xChoice = "s";
    }
    return xChoice;
    
}

function humanChoiceState() {
    rButton = document.createElement("button");
    pButton = document.createElement("button");
    sButton = document.createElement("button");
    mainText = document.createElement("h1");

    rButton.textContent = "Rock";
    pButton.textContent = "Paper";
    sButton.textContent = "Scissors";
    mainText.textContent = "Choose your weapon!";

    main.appendChild(mainText);
    main.appendChild(rButton);
    main.appendChild(pButton);
    main.appendChild(sButton);

    rButton.addEventListener("click", () => {
        humanChoice = "r";
        main.removeChild(rButton);
        main.removeChild(pButton);
        main.removeChild(sButton);
        main.removeChild(mainText);
        playRound(humanChoice, getComputerChoice());
    })
    pButton.addEventListener("click", () => {
        humanChoice = "p";
        main.removeChild(rButton);
        main.removeChild(pButton);
        main.removeChild(sButton);
        main.removeChild(mainText);
        playRound(humanChoice, getComputerChoice());
    })
    sButton.addEventListener("click", () => {
        humanChoice = "s";
        main.removeChild(rButton);
        main.removeChild(pButton);
        main.removeChild(sButton);
        main.removeChild(mainText);
        playRound(humanChoice, getComputerChoice());
    })
    
}

function playRound(h, c) {
    n += 1;
    mainText = document.createElement("h1");
    mainText.textContent = "Round " + n;

    humanChoiceText = document.createElement("p");
    if (h == "r") {
        humanChoiceText.textContent = "You chose: rock!";
    } else if (h == "p" ) {
        humanChoiceText.textContent = "You chose: paper!";
    } else {
        humanChoiceText.textContent = "You chose: scissors!";
    }

    computerChoiceText = document.createElement("p");
    if (c == "r") {
        computerChoiceText.textContent = "Computer chose: rock!";
    } else if (c == "p" ) {
        computerChoiceText.textContent = "Computer chose: paper!";
    } else {
        computerChoiceText.textContent = "Computer chose: scissors!";
    }

    whoWon = document.createElement("p");

    main.appendChild(mainText);
    main.appendChild(humanChoiceText);
    main.appendChild(computerChoiceText);

    if (h == c) {
        whoWon.textContent = "You tied!"
    } else if (h == "r" && c == "p") {
        computerScore += 1;
        whoWon.textContent = "Computer wins!"
    } else if (h == "r" && c == "s") {
        humanScore += 1;
        whoWon.textContent = "Human wins!"
    } else if (h == "p" && c == "r") {
        humanScore += 1;
        whoWon.textContent = "Human wins!"
    } else if (h == "p" && c == "s") {
        computerScore += 1;
        whoWon.textContent = "Computer wins!"
    } else if (h == "s" && c == "r") {
        computerScore += 1;
        whoWon.textContent = "Computer wins!"
    } else if (h == "s" && c == "p") {
        humanScore += 1;
        whoWon.textContent = "Human wins!"
    } else {
        console.log("An error has occurred. Please try again.");
    }
    main.appendChild(whoWon);

    nextRoundButton = document.createElement("button");
    nextRoundButton.textContent = "Next Round";

    quitButton = document.createElement("button");
    quitButton.textContent = "Quit game";

    main.appendChild(nextRoundButton);
    main.appendChild(quitButton);

    nextRoundButton.addEventListener("click", () => {
        main.removeChild(mainText);
        main.removeChild(humanChoiceText);
        main.removeChild(computerChoiceText);
        main.removeChild(whoWon);
        main.removeChild(nextRoundButton);
        main.removeChild(quitButton);
        humanChoiceState();
    })

    quitButton.addEventListener("click", () => {
        main.removeChild(mainText);
        main.removeChild(humanChoiceText);
        main.removeChild(computerChoiceText);
        main.removeChild(whoWon);
        main.removeChild(nextRoundButton);
        main.removeChild(quitButton);
        endGame();
    })
}

function endGame() {
    n = 0;
    mainText = document.createElement("h1");
    mainText.textContent = "Game finished!";

    computerScoreText = document.createElement("p");
    computerScoreText.textContent = "Computer score is: " + computerScore;

    humanScoreText = document.createElement("p");
    humanScoreText.textContent = "Your score is: " + humanScore;

    winnerText = document.createElement("p");
    if (humanScore > computerScore) {
        winnerText.textContent = "You won!"
    } else if (humanScore < computerScore) {
        winnerText.textContent = "You lost!"
    } else {
        winnerText.textContent = "You tied!"
    }

    playAgainButton = document.createElement("button");
    playAgainButton.textContent = "Play Again";

    main.appendChild(mainText);
    main.appendChild(computerScoreText);
    main.appendChild(humanScoreText);
    main.appendChild(winnerText);
    main.appendChild(playAgainButton);

    playAgainButton.addEventListener("click", () => {
        main.removeChild(mainText);
        main.removeChild(computerScoreText);
        main.removeChild(humanScoreText);
        main.removeChild(winnerText);
        main.removeChild(playAgainButton);
        humanChoiceState();
    })
}


initialState();

