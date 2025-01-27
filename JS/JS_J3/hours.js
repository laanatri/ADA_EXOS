// Creer votre nouveau dossier et/ou fichier avec les lignes de commandes
// Faire cet exercice, l'objectif est de decider si vous vous levez ou non selon l'heure
// Avoir une variable dans laquelle on donne l'heure
// Ecrire une fonction qui affiche "je me reveille" selon l'heure donnee en parametre
// Ecrire une fonction qui affiche "je m'endors" selon l'heure donnee en parametre
// S'il est 7H, je dois me reveiller et s'il est 23H, je dois m'endormir (modifié) 


const wakeUp = (hour) => {
    if (hour === 7) {
        console.log("je me reveille")
    } else if (hour === 23) {
        console.log("je dois m'endormir")
    } else if (hour < 7 || hour > 23 ) {
        console.log("DODO !!")
    } else {
        console.log("Boss ton code !")
    }
}

wakeUp(7)
wakeUp(23)
wakeUp(6)
wakeUp(24)
wakeUp(15)