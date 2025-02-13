// let letters = [ 'A', 'd', 'a', '-', 'T', 'e', 'c', 'h'];
let letters = [ 'A', 'd', 'a', '-', 'S', 'c', 'h', 'o', 'o', 'l']
let message = "";



// letters.forEach(letter => message = message + letter);



// for(let letter of letters) {
//     message = message + letter;
// }



// for (let i = 0; i < letters.length; i++) [
//     message = message + letters[i]
// ]



let i = 0;
while (i < letters.length) {
    message = message + letters[i];
    i++;
}



console.log(message)