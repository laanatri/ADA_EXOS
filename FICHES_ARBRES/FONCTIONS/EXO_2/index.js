// returnNumAuCarre prend en argument un nombre entier
const returnNumAuCarre = (num) => {
    return num * num;
};

const resultNumCarre = returnNumAuCarre(input);

// console.log(returnNumAuCarre(3));
// console.log(returnNumAuCarre(2));

const returnNumMultiplyByTen = (num) => {
    return num * 10;
};

// console.log(returnNumMultiplyByTen(9))

var input = prompt("Donne-nous un nombre entier :");

console.log(returnNumAuCarre(input), returnNumMultiplyByTen(parseInt(resultNumCarre)));