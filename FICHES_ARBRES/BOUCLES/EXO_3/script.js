let number = prompt("Donne-moi un nombre entre 0 et 10");

while (number < 0 || number > 10) {
    alert("out of range, reéssaye");
    number = prompt("Donne-moi un nombre entre 0 et 10");
}
for (let i = number; i >= 0; i--) {
    console.log(i)
}