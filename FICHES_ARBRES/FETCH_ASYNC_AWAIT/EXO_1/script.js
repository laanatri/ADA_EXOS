const section = document.querySelector("section");

async function  fetchOffers() {
    const response = await fetch("https://www.codepassport.dev/api/offers");
    const offers = await response.json();
    let content = '';
    for (const offer of offers) {
        content += `<h2>${offer.titre}</h2>
                    <p>${offer.description}</p>
                    `
    }
    section.innerHTML = content;
}

fetchOffers();