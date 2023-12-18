let computerScore = 0;
let playerScore = 0;
function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    return choices[Math.floor(Math.random() * 3)];
}

function updateScores() {
    const playerScoreElement = document.getElementById('player-score');
    const computerScoreElement = document.getElementById('comp-score');

    playerScoreElement.textContent = `Player Score: ${playerScore}`;
    computerScoreElement.textContent = `Computer Score: ${computerScore}`;
}

function declareWinner() {
    const resultContainer = document.getElementById('roundResults');
    const resultElement = document.createElement('p');

    if (computerScore === 5 || playerScore === 5) {
    if (playerScore === 5) {
        resultElement.textContent = 'Congratulations! You are the winner!';
    } else if (computerScore=== 5) {
        resultElement.textContent = 'Sorry! The computer is the winner.';
    } else {
        resultElement.textContent = 'It\'s a tie!';
    }
    }
    resultContainer.appendChild(resultElement);
}

function playRound(ComputerChoice, PlayerChoice) {
    // Clear existing results before adding a new one
    const resultContainer = document.getElementById('roundResults');
    if (resultContainer) {
        resultContainer.innerHTML = ''; // Clear all child elements
    } else {
        console.error("Error: 'roundResults' container not found in the HTML");
    }

    let resultMessage = '';
    if (PlayerChoice === ComputerChoice) {
        resultMessage = 'Tie';
    } else if (PlayerChoice === 'Rock') {
        if (ComputerChoice === 'Paper') {
            computerScore++;
            resultMessage = 'You Lose! Paper beats Rock';
        } else {
            playerScore++;
            resultMessage = 'You won! Rock beats Scissors';
        }
    } else if (PlayerChoice === 'Scissors') {
        if (ComputerChoice === 'Rock') {
            computerScore++;
            resultMessage = 'You Lose! Rock beats Scissors';
        } else {
            playerScore++;
            resultMessage = 'You won! Scissors beat Paper';
        }
    } else if (PlayerChoice === 'Paper') {
        if (ComputerChoice === 'Scissors') {
            computerScore++;
            resultMessage = 'You Lose! Scissors beat Paper';
        } else {
            playerScore++;
            resultMessage = 'You won! Paper beats Rock';
        }
    } else {
        resultMessage = 'Invalid choice';
    }

    // Append the result message to the result container in the HTML
    const resultElement = document.createElement('p');
    resultElement.textContent = resultMessage;
    resultContainer.appendChild(resultElement);

    // Update scores in the HTML
    updateScores();

    // Remove existing event listeners
    document.getElementById('Rock').removeEventListener('click', handleRock);
    document.getElementById('Paper').removeEventListener('click', handlePaper);
    document.getElementById('Scissors').removeEventListener('click', handleScissors);

    // Add new event listeners
    document.getElementById('Rock').addEventListener('click', handleRock);
    document.getElementById('Paper').addEventListener('click', handlePaper);
    document.getElementById('Scissors').addEventListener('click', handleScissors);
}

// Event listeners for each button
function handleRock() {
    handlePlayerChoice('Rock');
}

function handlePaper() {
    handlePlayerChoice('Paper');
}

function handleScissors() {
    handlePlayerChoice('Scissors');
}




function handlePlayerChoice(choice) {
    // Clear result container at the beginning
    const resultContainer = document.getElementById('roundResults');
    if (resultContainer) {
        resultContainer.innerHTML = ''; // Clear all child elements
    } else {
        console.error("Error: 'roundResults' container not found in the HTML");
    }

    if (playerScore >= 5 || computerScore >= 5) {
        // If the game is already won, do nothing
        return;
    }

    playerChoice = choice;
    computerChoice = getComputerChoice();
    playRound(computerChoice, playerChoice);

    // Check for the winner after each round
    if (playerScore === 5 || computerScore === 5) {
        declareWinner();
        
        // Reset the game after declaring the winner
        resetGame();
    }
}


function resetGame() {
    // Reset scores
    playerScore = 0;
    computerScore = 0;

    // Clear result container
    const resultContainer = document.getElementById('roundResults');
    if (resultContainer) {
        resultContainer.innerHTML = ''; // Clear all child elements
    } else {
        console.error("Error: 'roundResults' container not found in the HTML");
    }

    // Remove event listeners from buttons to prevent duplicates
    document.getElementById('Rock').removeEventListener('click', handlePlayerChoice);
    document.getElementById('Paper').removeEventListener('click', handlePlayerChoice);
    document.getElementById('Scissors').removeEventListener('click', handlePlayerChoice);

    // Update scores in the HTML
    updateScores();

    // Add event listeners to buttons
   
    // Start a new game
    game();
}



// Add event listener to the reset button
document.getElementById('reset').addEventListener('click', function () {
    resetGame();
    
});

function game() {
    let playerChoice, computerChoice;



    document.getElementById('Rock').addEventListener('click', function (event) {
        handlePlayerChoice('Rock');
    });
    
    document.getElementById('Paper').addEventListener('click', function (event) {
        handlePlayerChoice('Paper');
    });
    
    document.getElementById('Scissors').addEventListener('click', function (event) {
        handlePlayerChoice('Scissors');
    });
    

    function handlePlayerChoice(choice) {
        if (playerScore >= 5 || computerScore >= 5) {
            // If the game is already won, do nothing
            return;
        }

        playerChoice = choice;
        computerChoice = getComputerChoice();
        playRound(computerChoice, playerChoice);

        // Check for the winner after each round
        if (playerScore === 5 || computerScore === 5) {
            declareWinner();
        }
       
    }
}




document.addEventListener('DOMContentLoaded', function () {
    // Initial game setup
    resetGame();
});
