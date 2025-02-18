
let dataArray = [];
let doubleArrayData = [];

//Fetching Data from json
function fetchMethod(urlType) {
    if (urlType === "Avengers.json") {
        fetch(urlType).then(response => response.json())
            .then(data => {
                dataArray = data
                doubleArrayData = [...dataArray, ...dataArray];
                let shuffledData = shuffleData(doubleArrayData);
                generateCards(shuffledData);
                console.log(shuffledData);
            })
    }
    else if (urlType === "Pokemons.json") {
        fetch(urlType).then(response => response.json())
            .then(data => {
                dataArray = data
                doubleArrayData = [...dataArray, ...dataArray];
                let shuffledData = shuffleData(doubleArrayData);
                generateCards(shuffledData);
                console.log(shuffledData);
            })
    }
    else if (urlType === "Benten.json") {
        fetch(urlType).then(response => response.json())
            .then(data => {
                dataArray = data
                doubleArrayData = [...dataArray, ...dataArray];
                let shuffledData = shuffleData(doubleArrayData);
                generateCards(shuffledData);
            })
    }
    else if (urlType === "indianCricketers.json") {
        fetch(urlType).then(response => response.json())
            .then(data => {
                dataArray = data
                doubleArrayData = [...dataArray, ...dataArray];
                let shuffledData = shuffleData(doubleArrayData);
                generateCards(shuffledData);
                console.log(shuffledData);
            })
    } else {
        console.log("url is not working")
    }
    //Restart game
    document.getElementById('restartBtn').addEventListener('click', restartGame);
    function restartGame() {
        matchedCards = [];
        flippedCards = [];
        fetchMethod(urlType);
    }
}
fetchMethod("indianCricketers.json");

//Shuffle the cards
function shuffleData(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

//Generate the cards in grid container
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
        `

        cardElement.addEventListener('click', flipCard);
        gameBoard.appendChild(cardElement);
    });
}
let flippedCards = [];
let matchedCards = [];

//Fliping cards 
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

//checking for two cards matching
const matchSound = new Audio('correctSound.mp3');
const nomatchSound = new Audio('wrongSound.mp3');
const matchWinSound = new Audio('winSound.wav');

function checkForMatch() {
    const [card1, card2] = flippedCards;

    if (card1.dataset.id === card2.dataset.id) {
        matchSound.play();
        matchedCards.push(card1, card2);
        flippedCards = [];
        card1.classList.add('matched');
        card2.classList.add('matched');

        if (matchedCards.length === doubleArrayData.length) {
            matchWinSound.play();
            setTimeout(() => {
                alert('You won the game!');
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
