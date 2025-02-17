
let dataArray = [];
function fetchMethod(urlType) {
    if (urlType === "avengers.json") {
        fetch(urlType).then(response => response.json())
            .then(data => {
                dataArray = data
                console.log(dataArray)
            })
    }
    else if (urlType === "pokemons.json") {
        fetch(urlType).then(response => response.json())
            .then(data => {
                dataArray = data
                console.log(dataArray)
            })
    }
    else if (urlType === "benten.json") {
        fetch(urlType).then(response => response.json())
            .then(data => {
                dataArray = data
                console.log(dataArray)
            })
    }
    else if (urlType === "indianCricketTeam.json") {
        fetch(urlType).then(response => response.json())
            .then(data => {
                dataArray = data
                console.log(dataArray)
            })
    }
}
fetchMethod("indianCricketTeam.json");