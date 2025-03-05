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

const checkInputEncode = (text) => {
    let continuer = true;
    getLatinCharacterList(text).some(letter => {
        if (translateLatinCharacter(letter) === undefined && letter !== " ") {
            alert("on ne prend pas les caract");
            continuer = false;
            return true;
        }
    })
    return continuer;
}

const encode = (text) => {
    if (checkInputEncode(text)) {
        let encodedString = "";
        getLatinCharacterList(text).forEach(letter => {
            if (letter === " ") {
                encodedString += "/ ";
            } else if (translateLatinCharacter(letter) === undefined) {
                // error
            } else {
                encodedString += translateLatinCharacter(letter) + " ";
            }
        });
        encodedString = encodedString.slice(0, encodedString.length - 1);
        trad.innerText = encodedString;
    }
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

const checkInputDecode = (text) => {
    let continuer = true;
    getMorseCharacterList(text).some(letter => {
        if (translateMorseCharacter(letter) === undefined && letter !== "/") {
            alert("ce n'est pas un morse valide");
            continuer = false;
            return true;
        }
    })
    return continuer;
}

const decode = (morseText) => {
    if (checkInputDecode(morseText)) {
        let newString = "";
        getMorseCharacterList(morseText).forEach(letter => {
            if (letter === "/") {
                newString += " ";
            } else {
                newString += translateMorseCharacter(letter);
            }  
        });
        trad.innerText = newString;
    }
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

const removeTrad = (target) => {
    datasToStore = JSON.parse(localStorage.getItem("datas"));
    let dataToRemove = datasToStore.find((x => x.txt === target.parentNode.querySelector('.fr-trad').innerText));
    datasToStore.splice(datasToStore.indexOf(dataToRemove), 1);
    localStorage.setItem("datas", JSON.stringify(datasToStore));
    target.parentNode.remove();
}

let datasToStore = [];

const saveInLocalStorage = (txt, morse) => {
    datasToStore.push({"txt": txt, "morse": morse});
    localStorage.setItem("datas", JSON.stringify(datasToStore));
}

const getFromLocalStorage = () => {
    if (localStorage.getItem("datas")) {
        datasToStore = JSON.parse(localStorage.getItem("datas"));
        datasToStore.forEach(data => {
            // Création content pour une trad
            const traduction = document.createElement("div");
            traduction.classList.add("traductions");
            tradSave.appendChild(traduction);
            // Button remove
            const btnRemove = document.createElement("div");
            btnRemove.classList.add("remove-trad");
            traduction.appendChild(btnRemove);
            const imgTrash = document.createElement("img");
            imgTrash.src = "./trash.svg";
            btnRemove.appendChild(imgTrash);

            // add event trash
            btnRemove.addEventListener("click", () => {
                removeTrad(event.currentTarget);
            })

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

getFromLocalStorage();

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
        btnRemove.classList.add("remove-trad");
        traduction.appendChild(btnRemove);
        const imgTrash = document.createElement("img");
        imgTrash.src = "./trash.svg";
        btnRemove.appendChild(imgTrash);

        // add event trash
        btnRemove.addEventListener("click", () => {
            removeTrad(event.currentTarget);
        })

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

