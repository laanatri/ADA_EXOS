export const sayHello = (name = "") => {
	if (name === "") {
		return "Je n'ai personne à qui dire bonjour."
	} else if (name.length > 50) {
		return "C'est trop long pour être un prénom !?"
	} else if (typeof(name) != "string") {
		return "Ce n'est pas un prénom."
	} else {
		return "Bonjour, " + name + " !"; // J'ajoute juste cette ligne pour répondre à mon premier cas de test
	}
}