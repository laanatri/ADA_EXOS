const sectionPlayer1 = document.querySelector(".player1");
const sectionPlayer2 = document.querySelector(".player2");
const sectionYouWin = document.querySelector(".you-win");
const inputNumberP1 = document.querySelector(".player1 .number");
const buttonCheckP1 = document.querySelector(".player1 button");
const labelNumberP2 = document.querySelector(".player2 label");
const inputNumberP2 = document.querySelector(".player2 .number");
const buttonCheckP2 = document.querySelector(".player2 button");
const startRange = document.querySelector(".player2 .start");
const endRange = document.querySelector(".player2 .end");
const tryCount = document.querySelector(".player2 .try-count span");
const reset = document.querySelector(".reset");

let numberToGuess = 0;
let number = 0;
let countTry = 1;

const askNumber = () => {
    // const givenNumber = prompt("Joueur 2 : Devine le nombre entre 0 et 50");
    const givenNumber = parseInt(inputNumberP2.value);
    return givenNumber; 
};

// const numberToGuess = 22;

const askNumberToGuess = () => {
    // const givenNumber = prompt("Joueur 1 : Donne moi un nombre à faire deviner");
    const givenNumber = parseInt(inputNumberP1.value);
    return givenNumber; 
};

const resetInput = () => {
    inputNumberP1.value = "";
    inputNumberP2.value = "";
}

const didIWin = (givenNumber, choosenNumber) => {
    if (givenNumber === choosenNumber) {
        // alert("Bravo ! Vous avez deviné le nombre");
        sectionPlayer1.style.display = "none";
        sectionPlayer2.style.display = "none";
        sectionYouWin.style.display = "flex";
        sectionYouWin.querySelector("span").innerText = givenNumber;

        return true;

    } else if (givenNumber < choosenNumber) {

        if (startRange.innerText > givenNumber) {
            alert("out of range");
            resetInput();
        } else {
            alert("Plus grand");
            startRange.innerText = givenNumber;
            resetInput();
        }

        return false;

    } else {

        if (endRange.innerText < givenNumber) {
            alert("out of range");
            resetInput();
        } else {
            alert("Plus petit");
            endRange.innerText = givenNumber;
            resetInput();
        }

        return false;

    };
};

const resetGame = () => {
    numberToGuess = 0;
    number = 0;
    countTry = 1;

    tryCount.innerText = countTry;
    startRange.innerText = 0;
    endRange.innerText = 50;

    resetInput();

    setTimeout(() => {
        inputNumberP1.focus();
    }, 300)

    sectionPlayer1.style.display = "flex";
    sectionPlayer2.style.display = "none";
    sectionYouWin.style.display = "none";
}

const gamePlay = () => {
    inputNumberP1.focus();

    // Ecoute le joueur 1
    sectionPlayer1.addEventListener("submit", (ev) => {
        ev.preventDefault();

        numberToGuess = askNumberToGuess();

        sectionPlayer1.style.display = "none";
        sectionPlayer2.style.display = "flex";

        inputNumberP2.focus();
    })

    // Ecoute le joueur 2
    sectionPlayer2.addEventListener("submit", (ev) => {
        ev.preventDefault();

        countTry++
        tryCount.innerText = countTry;

        number = askNumber();

        return didIWin(number, numberToGuess)
    })

    // Reset la game
    reset.addEventListener("click", () => {
        resetGame();
    })
};

gamePlay();