const candidates = ['Le Filip','Ruby On The Nail','Leona Winter','Lula Strega','Misty Phoenix','Perseo','Norma Bell','Edeha Noire','Magnetica','Afrodite Amour'];

console.log(candidates[0]);

console.log(candidates[7]);

candidates.forEach(candidate => console.log(candidate));

const candidatesContainer = document.querySelector(".candidates-container");
const list = document.createElement("ul");
candidatesContainer.append(list);
candidates.forEach(candidate => list.innerHTML += `<li>${candidate}</li>`);