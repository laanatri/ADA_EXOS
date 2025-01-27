// Retourne aléatoirement des éléments du tableau choice
const randomChoice = (choices) => {
    return choices[Math.floor(Math.random() * choices.length)];
};

// Retourne un nombre aléatoire, compris entre min et max.
// Le nombre de chiffres après la virgule est défini par precision
const randomRange = (min, max, precision) => {
    return parseFloat((Math.random() * (max - min) + min).toFixed(precision));
};

const generateFlowers = (width, depth, count) => {
    let flowersChoices = ["flower 1", "flower 2", "flower 3"]
    let flowers = []

    for (let i = 1; i <= count; i++) {
        flowers.push({})
        flowers[i - 1].type = flowersChoices[randomRange(0, count - 1, 0)]
        flowers[i - 1].size = randomRange(15, 20, 0)
        flowers[i - 1].x = randomRange(0, width, 0)
        flowers[i - 1].y = randomRange(0, depth, 0)
    }
    console.log(flowers)
    return flowers
}

generateFlowers(3, 2, 3)