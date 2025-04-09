const formulaire = document.querySelector("form");
const champEmail = document.querySelector("input");

formulaire.addEventListener("submit", (e) => {
    e.preventDefault();
    const emailRegex = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gm;
    if (champEmail.value.match(emailRegex)) {
        console.log(champEmail.value);
    } else {
        formulaire.classList.add("error");
    }
})

champEmail.addEventListener("input", () => {
    formulaire.classList.remove("error");
})