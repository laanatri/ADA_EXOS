const isValidDate = (date) => {
    if (!date) return false;
    // regex by chatGPT
    const regex = /^(?:(?:31\/(?:0[13578]|1[02]))|(?:30\/(?:0[13-9]|1[0-2]))|(?:29\/02\/(?:(?:[02468][048]|[13579][26])00|(?:[1-9]\d(?:0[48]|[2468][048]|[13579][26]))))|(?:0[1-9]|1\d|2[0-8])\/(?:0[1-9]|1[0-2])\/[1-9]\d{3})$/;
    return regex.test(date);
}

// console.log(isValidDate("")) // false
// console.log(isValidDate("03/0/2001")) // false
// console.log(isValidDate("30/02/2001")) // false
// console.log(isValidDate("03/14/2001")) // false
// console.log(isValidDate("03/002/2001")) // false
// console.log(isValidDate("03/02/0500")) // false
// console.log(isValidDate("03/02/10505")) // false
// console.log(isValidDate("03/04/2001")) // true

const isPalindrome = (string) => {
    let newString = "";
    string.split("").forEach(c => newString += c);
    newString = newString.split('').reverse().join('');
    if (string === newString) return true;
    return false;
}

console.log(isPalindrome("kayak"));
console.log(isPalindrome("bonjour"));

const isDatePalindrome = (date) => {
    if (!isValidDate(date)) return false;
    date = date.split("/").join('');
    if(isPalindrome(date)) return true;
    return false;
    // let newDate1 = "";
    // let newDate2 = "";
    // date.forEach(d => newDate1 += d);
    // date.forEach(d => newDate2 += d);
    // newDate1 = newDate1.split('').reverse().join('');
    // if (newDate1 === newDate2) return true;
    // return false;
}

// console.log(isDatePalindrome("11/02/2011")) // true
// console.log(isDatePalindrome("03/04/2001")) // false

const getNextPalindromes  = (nbr) => {
    let date = new Date();
    // const new date
    let i = 1;
    while (i <= nbr) {
        while (isDatePalindrome(date.toLocaleDateString()) === false) {
            date.setDate(date.getDate() + 1);
        }
        console.log(date.toLocaleDateString());
        date.setDate(date.getDate() + 1);
        i++;
    }
}

getNextPalindromes(5)