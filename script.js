
function playGame(playerGuess) {
    const randomNumber = Math.random();
    let computerGuess = '';

    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerGuess = 'Rock';
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerGuess = 'Paper';
    } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
        computerGuess = 'Scissors';
    }

    console.log(computerGuess);

    let result = '';

    if (playerGuess === computerGuess) {
        result = 'Tie';
    } else if (
        (playerGuess === 'Rock' && computerGuess === 'Scissors') ||
        (playerGuess === 'Paper' && computerGuess === 'Rock') ||
        (playerGuess === 'Scissors' && computerGuess === 'Paper')
    ) {
        result = 'You win!';
    } else {
        result = 'You lose!';
    }

    document.getElementById('playerChoice').textContent =
        'You picked: ' + playerGuess;

    document.getElementById('computerChoice').textContent =
        'Computer picked: ' + computerGuess;

    document.getElementById('resultText').textContent = result;
}

function resetGame() {
    document.getElementById('playerChoice').textContent =
        'You picked: —';

    document.getElementById('computerChoice').textContent =
        'Computer picked: —';

    document.getElementById('resultText').textContent =
        'Make your first move!';
}
