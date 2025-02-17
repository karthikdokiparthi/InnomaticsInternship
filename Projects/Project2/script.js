
let dataArray = [];
let doubleArrayData = [];
function fetchMethod(urlType) {
    if (urlType === "avengers.json") {
        fetch(urlType).then(response => response.json())
            .then(data => {
                dataArray = data
                doubleArrayData = [...dataArray, ...dataArray];
                let shuffledData = shuffleData(doubleArrayData);
                generateCards(shuffledData)
            })
    }
    else if (urlType === "pokemons.json") {
        fetch(urlType).then(response => response.json())
            .then(data => {
                dataArray = data
                doubleArrayData = [...dataArray, ...dataArray];
                let shuffledData = shuffleData(doubleArrayData);
                generateCards(shuffledData)
            })
    }
    else if (urlType === "benten.json") {
        fetch(urlType).then(response => response.json())
            .then(data => {
                dataArray = data
                doubleArrayData = [...dataArray, ...dataArray];
                let shuffledData = shuffleData(doubleArrayData);
                generateCards(shuffledData)
            })
    }
    else if (urlType === "indianCricketTeam.json") {
        fetch(urlType).then(response => response.json())
            .then(data => {
                dataArray = data
                doubleArrayData = [...dataArray, ...dataArray];
                let shuffledData = shuffleData(doubleArrayData);
                generateCards(shuffledData)
            })
    } else {
        console.log("url is not working")
    }
}
fetchMethod("pokemons.json");

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

        cardElement.addEventListener("click", () => flipCard(cardElement));
        gameBoard.appendChild(cardElement);
    });
}
