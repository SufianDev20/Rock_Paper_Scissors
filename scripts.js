function getComputerChoice() {
    const rand = Math.random();
    // Rock if values less than or under 0.30, Paper is for values below 0.60 else Scissors
    if (rand < 0.30) {
        return "rock";
    }
    else if (rand < 0.60) {
        return "paper";
    }
    else {
        return "scissors";
    }
}
function getHumanChoice() {
    const UserInput = prompt("Enter rock or paper or scissors");
    return UserInput;
}
function playGame() {
    let humanscore = 0;
    let computerscore = 0;
    function playRound(humanChoice, computerChoice) {
        const humanin = humanChoice.toLowerCase();
        if (humanin == computerChoice) {
            console.log(`Tie, You both have won and chose ${humanin}`);
            return;
        }
        const humanwins = (humanin == "rock" && computerChoice == "scissors") || (humanin == 'scissors' && computerChoice == "paper") || (humanin == 'paper' && computerChoice == "rock");
        if (humanwins) {
            humanscore++;
            console.log(`You win! ${humanin} beats ${computerChoice}`);
        }
        else {
            computerscore++;
            console.log(`Computer win! ${computerChoice} beats ${humanin}`);
        }
    }
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    if (humanscore > computerscore) {
        console.log(`Game Over: You won the game! Final Score: ${humanscore} - ${computerscore}`);
    } else if (computerscore > humanscore) {
        console.log(`Game Over: Computer won the game! Final Score: ${computerscore} - ${humanscore}`);
    } else {
        console.log(`Game Over: The game ended in a tie! Final Score: ${humanscore} - ${computerscore}`);
    }
}
playGame();