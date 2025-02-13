
const sectionJoueur1 = document.querySelector(".joueur1");
const sectionJoueur2 = document.querySelector(".joueur2");
const sectionYouWin = document.querySelector(".you-win");
const inputNumberJ1 = document.querySelector(".joueur1 .number");
const buttonCheckJ1 = document.querySelector(".joueur1 button");
const labelNumberJ2 = document.querySelector(".joueur2 label");
const inputNumberJ2 = document.querySelector(".joueur2 .number");
const buttonCheckJ2 = document.querySelector(".joueur2 button");
const startRange = document.querySelector(".joueur2 .start");
const endRange = document.querySelector(".joueur2 .end");
const tryCount = document.querySelector(".joueur2 .try-count span");
const reset = document.querySelector(".reset");

let numberToGuess = 0;
let number = 0;
let countTry = 1;

const askNumber = () => {
    // const givenNumber = prompt("Joueur 2 : Devine le nombre entre 0 et 50");
    const givenNumber = parseInt(inputNumberJ2.value);
    return givenNumber; 
};

// const numberToGuess = 22;

const askNumberToGuess = () => {
    // const givenNumber = prompt("Joueur 1 : Donne moi un nombre à faire deviner");
    const givenNumber = parseInt(inputNumberJ1.value);
    return givenNumber; 
};

const resetInput = () => {
    inputNumberJ1.value = "";
    inputNumberJ2.value = "";
}

const didIWin = (givenNumber, choosenNumber) => {
    if (givenNumber === choosenNumber) {
        // alert("Bravo ! Vous avez deviné le nombre");
        sectionJoueur1.style.display = "none";
        sectionJoueur2.style.display = "none";
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
        inputNumberJ1.focus();
    }, 300)

    sectionJoueur1.style.display = "flex";
    sectionJoueur2.style.display = "none";
    sectionYouWin.style.display = "none";
}

const gamePlay = () => {
    inputNumberJ1.focus();

    // Ecoute le joueur 1
    sectionJoueur1.addEventListener("submit", (ev) => {
        ev.preventDefault();

        numberToGuess = askNumberToGuess();

        sectionJoueur1.style.display = "none";
        sectionJoueur2.style.display = "flex";

        inputNumberJ2.focus();
    })

    // Ecoute le joueur 2
    sectionJoueur2.addEventListener("submit", (ev) => {
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