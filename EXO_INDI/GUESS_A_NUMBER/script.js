
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
            alert("out of range")
        } else {
            alert("Plus grand");
            startRange.innerText = givenNumber;
        }
        return false;
    } else {
        if (endRange.innerText < givenNumber) {
            alert("out of range")
        } else {
            alert("Plus petit");
            endRange.innerText = givenNumber;
        }
        return false;
    };
};

const gamePlay = () => {
    let numberToGuess = 0;
    let number = 0;
    let countTry = 1;

    buttonCheckJ1.addEventListener("click", () => {
        numberToGuess = askNumberToGuess();
        sectionJoueur1.style.display = "none";
        sectionJoueur2.style.display = "flex";
    })

    buttonCheckJ2.addEventListener("click", () => {
        countTry++
        tryCount.innerText = countTry;
        number = askNumber();
        return didIWin(number, numberToGuess)
    })

    reset.addEventListener("click", () => {
        numberToGuess = 0;
        number = 0;
        countTry = 1;
        inputNumberJ1.value = 0;
        inputNumberJ2.value = 0;
        sectionJoueur1.style.display = "flex";
        sectionJoueur2.style.display = "none";
        sectionYouWin.style.display = "none";
    })
};

gamePlay();