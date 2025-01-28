humanScore = 0;
computerScore = 0;

function getComputerChoice() {
    x = Math.random(0,2) * 100;
    if (x <= 33) {
        xChoice = "Rock";
    } else if (x <= 66) {
        xChoice = "Paper" ;
    } else {
        xChoice = "Scissors";
    }
    return xChoice;
    
}

function getHumanChoice() {
    running = true
    while (running) {
        x = window.prompt("Choose your weapon (rock/paper/scissors)")
        if (x == "rock" ||x ==  "Rock" ||x ==  "ROCK" ||x ==  "r") {
            x = "Rock";
            running = false;
        } else if (x == "paper" ||x ==  "Paper" ||x ==  "PAPER" ||x ==  "p") {
            x = "Paper";
            running = false;
        } else if (x == "scissors" ||x ==  "scissor" ||x ==  "Scissors" ||x ==  "Scissor" ||x ==  "SCISSOR" ||x ==  "SCISSORS" ||x ==  "s") {
            x = "Scissors";
            running = false;
        } else {
            window.alert("That is not an option. Please try again.");
        }
    }
    return x;
}

function playRound(h, c) {
    h = getHumanChoice()
    c = getComputerChoice()

    if (h == c) {
        console.log("Computer chose... " + c);
        console.log("You tied!")
    } else if (h == "Rock" && c == "Paper") {
        computerScore += 1;
        console.log("Computer chose... " + c);
        console.log("You lost!");
    } else if (h == "Rock" && c == "Scissors") {
        humanScore += 1;
        console.log("Computer chose... " + c);
        console.log("You won!");
    } else if (h == "Paper" && c == "Rock") {
        humanScore += 1;
        console.log("Computer chose... " + c);
        console.log("You won!");
    } else if (h == "Paper" && c == "Scissors") {
        computerScore += 1;
        console.log("Computer chose... " + c);
        console.log("You lost!");
    } else if (h == "Scissors" && c == "Rock") {
        computerScore += 1;
        console.log("Computer chose... " + c);
        console.log("You lost!");
    } else if (h == "Scissors" && c == "Paper") {
        humanScore += 1;
        console.log("Computer chose... " + c);
        console.log("You won!");
    } else {
        console.log("An error has occurred. Please try again.");
    }
    
}


x = true;
console.log("Welcome to Rock, Paper and Scissors! You will be fighting against the computer today. Get ready for a blast!")
while (x) {
    playRound(getComputerChoice(), getHumanChoice());
    playAgain = prompt("Play next round? (y/n)");
    if (playAgain == "n") {
        x = false;
    }
}

console.log("Human score is " + humanScore + " and Computer score is " + computerScore + "!");
