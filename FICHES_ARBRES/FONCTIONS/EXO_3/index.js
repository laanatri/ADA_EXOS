function sendMessage(message, fromName, toName) {
    console.log("From : " + fromName + "\nto : " + toName + "\nMessage : " + message)
}

sendMessage("Je te rends visite la semaine prochaine", "Marc", "Linda");
sendMessage("Super on se voit mardi !", "Linda", "Marc")

let contactName = "Jean"
let myName = "Ada"
let myMessage = "Je t'apprends à coder tes premières fonctions"

sendMessage(myMessage, myName, contactName)

// message, fromName et toName ne sont pas de varibles déclarées
// => je les ai remplacer par myMessage, myName et contactName

// j'ai réindenté la fonction, rajouté une acolade fermée à la fin et une parenthèse fermée à la fin du console.log

// j'y ai rajouté des sauts de ligne pour que ce soit plus lisible

// j'ai  enlevé l'appel de la fonction qui lui passait aucun argument

// j'ai descendue le premier appel de la fonction sous sa déclaration

// j'ai remplacé les brackets par des parenthèses sur le deuxième appel de la fonction