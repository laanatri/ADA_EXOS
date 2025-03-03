const choicesButtons = document.querySelectorAll(".btns-content button");
const formEl = document.querySelector(".form");
const label = document.querySelector("label");
const input = document.querySelector("input");
const sendButton = document.querySelector(".form button");
const trad = document.querySelector(".trad-content p");
const save = document.getElementById("save");
const tradSave = document.querySelector(".trad-saved");

const latinToMorse = {
	'A':'.-',
	'B':'-...',
	'C':'-.-.',
	'D':'-..',
	'E':'.',
	'F':'..-.',
	'G':'--.',
	'H':'....',
	'I':'..',
	'J':'.---',
	'K':'-.-',
	'L':'.-..',
	'M':'--',
	'N':'-.',
	'O':'---',
	'P':'.--.',
	'Q':'--.-',
	'R':'.-.',
	'S':'...',
	'T':'-',
	'U':'..-',
	'V':'...-',
	'W':'.--',
	'X':'-..-',
	'Y':'-.--',
	'Z':'--..'
}

const translateLatinCharacter = (character) => {
    return latinToMorse[character.toUpperCase()];
}

const getLatinCharacterList = (sentence) => {
    return sentence.split("");
}

const encode = (text) => {
    let encodedString = "";
    getLatinCharacterList(text).forEach(letter => {
        if (letter === " ") {
            encodedString += "/ ";
        } else if (translateLatinCharacter(letter) === undefined) {

        } else {
            encodedString += translateLatinCharacter(letter) + " ";
        }
    });
    encodedString = encodedString.slice(0, encodedString.length - 1);
    trad.innerText = encodedString;
};

// encode("Hello, world");

const morseToLatin = {
    '-': "T",
    '--': "M",
    '---': "O",
    '--.': "G",
    '--.-': "Q",
    '--..': "Z",
    '-.': "N",
    '-.-': "K",
    '-.--': "Y",
    '-.-.': "C",
    '-..': "D",
    '-..-': "X",
    '-...': "B",
    '.': "E",
    '.-': "A",
    '.--': "W",
    '.---': "J",
    '.--.': "P",
    '.-.': "R",
    '.-..': "L",
    '..': "I",
    '..-': "U",
    '..-.': "F",
    '...': "S",
    '...-': "V",
    '....': "H"
}

const translateMorseCharacter = (morseLetter) => {
    return morseToLatin[morseLetter];
}

const getMorseCharacterList = (morse) => {
    return morse.split(" ");
}

const decode = (morseText) => {
    let newString = "";
    getMorseCharacterList(morseText).forEach(letter => {
        if (letter === "/") {
            newString += " ";
        } else {
            newString += translateMorseCharacter(letter);
        }  
    });
    trad.innerText = newString;
};

// decode(".... . .-.. .-.. --- / .-- --- .-. .-.. -..");

const checkOrder = () => {
        // Contenu des p
    if (choicesButtons[1].classList.contains("selected")) {
        tradFRP.innerText = trad.innerText;
        tradmorseP.innerText = input.value;
    } else {
        tradFRP.innerText = input.value;
        tradmorseP.innerText = trad.innerText;
    }
}

const displayTrad = () => {
    // Création content pour une trad

}

let datasToStore = [];

const saveInLocalStorage = (txt, morse) => {
    datasToStore.push({"txt": txt, "morse": morse});
    localStorage.setItem("datas", JSON.stringify(datasToStore));
    console.log(datasToStore);
}

const getFromLocalStorage = () => {
    datasToStore = JSON.parse(localStorage.getItem("datas")) ;
    if (datasToStore) {
        datasToStore.forEach(data => {
            // Création content pour une trad
            const traduction = document.createElement("div");
            traduction.classList.add("traductions");
            tradSave.appendChild(traduction);
            // Trad en FR
            const tradFR = document.createElement("div");
            tradFR.classList.add("fr-trad");
            traduction.appendChild(tradFR);
            const tradFRP = document.createElement("p");
            tradFR.appendChild(tradFRP);
            // Séparateur
            const hr = document.createElement("div");
            hr.classList.add("hr");
            traduction.appendChild(hr);
            // Trad en morse
            const tradmorse = document.createElement("div");
            tradmorse.classList.add("morse-trad");
            traduction.appendChild(tradmorse);
            const tradmorseP = document.createElement("p");
            tradmorse.appendChild(tradmorseP);
            // Contenu des p
            if (choicesButtons[0].classList.contains("selected")) {
                tradFRP.innerText = data.txt;
                tradmorseP.innerText = data.morse;
            } else {
                tradFRP.innerText = data.morse;
                tradmorseP.innerText = data.txt;
            }
        })
    }
}

// getFromLocalStorage();

choicesButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        if (!btn.classList.contains("selected")) {
            choicesButtons.forEach(b => b.classList.remove("selected"))
            btn.classList.add("selected");
            if (btn === document.querySelector(".btns-content button:first-child")) {
                label.innerText = "Insérer votre phrase ici :";
                sendButton.innerText = "Traduire en morse";
            } else {
                label.innerText = "Insérer votre morse ici :";
                sendButton.innerText = "Traduire en français";
            }
        }
    })
});

formEl.addEventListener("submit", () => {
    event.preventDefault();
    if (sendButton.innerText === "Traduire en morse") {
        // Traduction
        encode(input.value);
    } else {
        // Version
        decode(input.value);
    }
});

save.addEventListener("click", () => {
    if (input.value != "" && trad.innerText != "") {
        // Création content pour une trad
        const traduction = document.createElement("div");
        traduction.classList.add("traductions");
        tradSave.appendChild(traduction);
        // Button remove
        const btnRemove = document.createElement("div");
        btnRemove.innerText = "X";
        btnRemove.classList.add("remove-trad");
        traduction.appendChild(btnRemove);
        // Trad en FR
        const tradFR = document.createElement("div");
        tradFR.classList.add("fr-trad");
        traduction.appendChild(tradFR);
        const tradFRP = document.createElement("p");
        tradFR.appendChild(tradFRP);
        // Séparateur
        const hr = document.createElement("div");
        hr.classList.add("hr");
        traduction.appendChild(hr);
        // Trad en morse
        const tradmorse = document.createElement("div");
        tradmorse.classList.add("morse-trad");
        traduction.appendChild(tradmorse);
        const tradmorseP = document.createElement("p");
        tradmorse.appendChild(tradmorseP);
        // Contenu des p
        if (choicesButtons[0].classList.contains("selected")) {
            tradFRP.innerText = input.value;
            tradmorseP.innerText = trad.innerText;
        } else {
            tradFRP.innerText = trad.innerText;
            tradmorseP.innerText = input.value;
        }
        
        // Save in localStorage
        saveInLocalStorage(tradFRP.innerText, tradmorseP.innerText);
    };
});