let dataArray = [];
let doubleArrayData = [];
let flippedCards = [];
let matchedCards = [];
let currentGameType = '';
let score = 0;
let timer;
let timeLeft = 60;

// Start Game
function startGame() {
    document.getElementById('home-screen').style.display = 'none';
    document.getElementById('game-selection').style.display = 'flex';
}

// Load Game
function loadGame(gameType) {
    currentGameType = gameType;
    document.getElementById('game-selection').style.display = 'none';
    document.getElementById('game-screen').style.display = 'flex';
    fetchMethod(gameType);
}

// Fetch Data from JSON
function fetchMethod(gameType) {
    fetch(`./data/${gameType}`)
        .then(response => response.json())
        .then(data => {
            dataArray = data;
            doubleArrayData = [...dataArray, ...dataArray];
            let shuffledData = shuffleData(doubleArrayData);
            generateCards(shuffledData);
            score = 0;
            document.getElementById('score').textContent = `Score: ${score}`;
            startTimer();
        })
        .catch(error => console.error('Error fetching data:', error));
}

// Shuffle the Cards
function shuffleData(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Generate the Cards in Grid Container
function generateCards(cards) {
    const gameBoard = document.getElementById('game-board');
    gameBoard.innerHTML = "";
    cards.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        cardElement.dataset.id = card.id;

        cardElement.innerHTML = `
            <div class="card-front">
                <img src="${card.img}" alt="card-image"/>
            </div>
            <div class="card-back"></div>
        `;

        cardElement.addEventListener('click', flipCard);
        gameBoard.appendChild(cardElement);
    });
}

// Flip Card
function flipCard() {
    const card = this;
    if (flippedCards.length < 2 && !card.classList.contains('flipped')) {
        card.classList.add('flipped');
        flippedCards.push(card);

        if (flippedCards.length === 2) {
            checkForMatch();
        }
    }
}

// Check for Match
const matchSound = new Audio('./data/correctSound.mp3');
const nomatchSound = new Audio('./data/wrongSound.mp3');
const matchWinSound = new Audio('./data/winSound.wav');

function checkForMatch() {
    const [card1, card2] = flippedCards;

    if (card1.dataset.id === card2.dataset.id) {
        matchSound.play();
        matchedCards.push(card1, card2);
        flippedCards = [];
        card1.classList.add('matched');
        card2.classList.add('matched');

        score += 10;
        document.getElementById('score').textContent = `Score: ${score}`;

        if (matchedCards.length === doubleArrayData.length) {
            clearInterval(timer);
            matchWinSound.play();
            setTimeout(() => {
                alert(`You won the game in ${60 - timeLeft} seconds! Score: ${score}`);
            }, 1000);
        }
    } else {
        nomatchSound.play();
        setTimeout(() => {
            card1.classList.remove('flipped');
            card2.classList.remove('flipped');
            flippedCards = [];
        }, 1000);
    }
}

//Timer function for game
function startTimer() {
    clearInterval(timer);
    timeLeft = 60;
    document.getElementById('timer').textContent = `Time: ${timeLeft}s`;
    timer = setInterval(() => {
        timeLeft--;
        document.getElementById('timer').textContent = `Time: ${timeLeft}s`;
        if (timeLeft <= 0) {
            clearInterval(timer);
            alert('Time is up! Game Over.');
            restartGame();
        }
    }, 1000);
}
// Restart Game
function restartGame() {
    matchedCards = [];
    flippedCards = [];
    fetchMethod(currentGameType);
}