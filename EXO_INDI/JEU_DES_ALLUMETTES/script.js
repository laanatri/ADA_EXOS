const playersForm = document.getElementById("players-form");
const playersSelect = document.querySelectorAll(".players-select");
const inputNumberOfPlayers = document.querySelector("#players-form input");
let numberOfPlayer = 1;
const gameForm = document.getElementById("game-form");
const matchesSelect = document.querySelectorAll(".matches-select");
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
    document.querySelector(".winner-content").style.display = "flex";
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
    document.querySelector(".game-start").style.display = "flex";
    document.querySelector(".winner-content").style.display = "none";
    document.querySelector("h2").innerText = "Player " + curentPlayer;
    inputNumberOfPlayers.value = 1;
    inputPlayerChoice.value = 1;
}

// choix du nombre de joueur
playersSelect.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        if (i === 0) {
            inputNumberOfPlayers.value--;
            if (inputNumberOfPlayers.value < 1) {
                inputNumberOfPlayers.value = 1;
            }
        } else {
            inputNumberOfPlayers.value++;
        }
    })
})

// lancer la partie
playersForm.addEventListener("submit", () => {
    event.preventDefault();
    startGame();
    return numberOfPlayer = inputNumberOfPlayers.value;
})

// choix du nombre d'allumettes à prendre
matchesSelect.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        if (i === 0) {
            inputPlayerChoice.value--;
            if (inputPlayerChoice.value < 1) {
                inputPlayerChoice.value = 1;
            }
        } else {
            inputPlayerChoice.value++;
            if (inputPlayerChoice.value > 6) {
                inputPlayerChoice.value = 6;
            }
        }
    })
})

// valider le choix du nombre d'allumettes prises
gameForm.addEventListener("submit", () => {
    event.preventDefault();
    handleGamePlay(inputPlayerChoice.value);
})

// reset
resetButton.addEventListener("click", () => {
    resetGame();
})