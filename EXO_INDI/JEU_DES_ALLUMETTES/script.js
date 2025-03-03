const playersForm = document.getElementById("players-form");
const inputNumberOfPlayers = document.querySelector("#players-form input");
let numberOfPlayer = 1;
const gameForm = document.getElementById("game-form");
const inputPlayerChoice = document.querySelector("#game-form input");
const matchContent = document.querySelector(".allumettes-content");
let matchCount = 50;
let curentPlayer = 1;
const resetButton = document.getElementById("reset");

const removeMatches = (nbrMatches) => {
    matchCount -= nbrMatches;
    console.log("il reste " + (matchCount))
}

const updateDisplayMatches = () => {
    matchContent.innerText = "";
    for (let i = 0; i < matchCount; i++) {
        let match = document.createElement("div");
        match.classList.add("allumette");
        matchContent.appendChild(match);
    }
}

const isItWin = (nbrMatchCount) => {
    return nbrMatchCount <= 0 ? true : false;
}

const displayWinner = () => {
    console.log("tu as gagné : " + curentPlayer);
    document.querySelector(".winner-name").innerText = "Player " + curentPlayer;
    document.querySelector(".game-content").style.display = "none";
    document.querySelector(".winner-content").style.display = "block";
}

const nextPlayer = () => {
    curentPlayer > numberOfPlayer - 1 ? curentPlayer = 1 : curentPlayer++;
    document.querySelector("h2").innerText = "Player " + curentPlayer;
}

const handleGamePlay = (nbrMatch) => {
    console.log(nbrMatch);
    removeMatches(nbrMatch);
    updateDisplayMatches();
    isItWin(matchCount) ? displayWinner() : nextPlayer();
}

const startGame = () => {
    document.querySelector(".game-start").style.display = "none";
    document.querySelector(".game-content").style.display = "flex";
    updateDisplayMatches();
}

const resetGame = () => {
    matchCount = 50;
    curentPlayer = 1;
    document.querySelector(".game-start").style.display = "block";
    document.querySelector(".winner-content").style.display = "none";
    document.querySelector("h2").innerText = "Player " + curentPlayer;
    inputNumberOfPlayers.value = 1;
    inputPlayerChoice.value = 1;
}

// choix du nombre de joueur
playersForm.addEventListener("submit", () => {
    event.preventDefault();
    startGame();
    return numberOfPlayer = inputNumberOfPlayers.value;
})

// choix du nombre d'allumettes à prendre
gameForm.addEventListener("submit", () => {
    event.preventDefault();
    handleGamePlay(inputPlayerChoice.value);
})

// reset
resetButton.addEventListener("click", () => {
    resetGame();
})

// choix du nombre de joueur
// lancer la partie
// chaque joueur peux prendre 1 à 6 Allu
// à chaque tour de joueur il faut checker si c'est gagné
// tant que c'est pas gagné, on iter sur les joueurs 
// si c'est gagné, on stop le partie puis on affiche le gagnant