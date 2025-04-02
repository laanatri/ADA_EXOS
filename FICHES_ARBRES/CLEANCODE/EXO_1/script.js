function somme(arr) {
	let n = 0;
	// for (let i = 0; i < arr.length; i++) {
	// 	n += arr[i];
	// }
	// return n;
    if (arr && arr.constructor === Array) {
        arr.forEach(el => typeof(el) === "number" ? n += el : n += 0);
        return n;
    } else {
        return "Erreur: Vous devez passer un tableau de nombres";
    }
}

console.log(somme([1, 2, 3, 4])); // Devrait retourner 10
console.log(somme([1, 2])); // Devrait retourner 3
console.log(somme([0])); // Devrait retourner 0
console.log(somme([1, 0])) // Devrait retourner 1

console.log(somme([1, "Haha"])) // Devrait retourner 1
console.log(somme()) // Devrait retourner "Erreur: Vous devez passer un tableau de nombres"
console.log(somme("Huhu")) // Devrait retourner "Erreur: Vous devez passer un tableau de nombres" 
