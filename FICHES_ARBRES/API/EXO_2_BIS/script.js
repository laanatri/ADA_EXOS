const fetchApi = async () => {

    // les 20 premiers persos by id
    const response = await fetch("https://rickandmortyapi.com/api/character");

    // FILTERS
    // les vivants
    // const response = await fetch("https://rickandmortyapi.com/api/character?status=alive");
    // les Morts
    // const response = await fetch("https://rickandmortyapi.com/api/character?status=dead");
    // les unknown
    // const response = await fetch("https://rickandmortyapi.com/api/character?status=unknown");

    // les human
    // const response = await fetch("https://rickandmortyapi.com/api/character?species=human");
    // les humanoid
    // const response = await fetch("https://rickandmortyapi.com/api/character?species=humanoid");
    // les alien
    // const response = await fetch("https://rickandmortyapi.com/api/character?species=alien");
    // les Poopybutthole
    // const response = await fetch("https://rickandmortyapi.com/api/character?species=Poopybutthole");
    // let Mythological Creature
    // const response = await fetch("https://rickandmortyapi.com/api/character?species=Mythological");
    // let animal
    // const response = await fetch("https://rickandmortyapi.com/api/character?species=animal");
    // let robot
    // const response = await fetch("https://rickandmortyapi.com/api/character?species=robot");
    // let Cronenberg
    // const response = await fetch("https://rickandmortyapi.com/api/character?species=Cronenberg");
    // let Disease
    // const response = await fetch("https://rickandmortyapi.com/api/character?species=Disease");
    // let unknown
    // const response = await fetch("https://rickandmortyapi.com/api/character?species=unknown");

    // les male
    // const response = await fetch("https://rickandmortyapi.com/api/character?gender=Male");
    // les female
    // const response = await fetch("https://rickandmortyapi.com/api/character?gender=Female");
    // les unknown
    // const response = await fetch("https://rickandmortyapi.com/api/character?gender=unknown");
    // les genderless
    // const response = await fetch("https://rickandmortyapi.com/api/character?gender=genderless");



// {
//     "info": {
//       "count": 826,
//       "pages": 42,
//       "next": "https://rickandmortyapi.com/api/character/?page=20",
//       "prev": "https://rickandmortyapi.com/api/character/?page=18"
//     },


    const data = await response.json();
    console.log(data.info.count)
    console.log(data.info.pages)
    console.log(data)
    console.log(data.results)

    document.querySelector(".characters-container").innerHTML = "";
    for await (const perso of data.results) {
        await updateCards(perso);
    }
}

const updateCards = async (dataItem) => {
    document.querySelector(".characters-container").innerHTML += `<div class="character-card">
            <div class="character-card-front">
                <div class="img-content">
                    <img src="${dataItem.image}" alt="">
                </div>
                <div class="txt-content">
                    <p class="name">${dataItem.name}</p>
                </div>
            </div>
            <div class="character-card-back">
                <p>DATAS</p>
                <p class="status">EXISTENCE : ${dataItem.status}</p>
                <p class="genre">GENRE : ${dataItem.gender}</p>
                <p class="species">ESPECE : ${dataItem.species}</p>
                <p class="location">LIEU : ${dataItem.location.name}</p>
            </div>
        </div>`
    const cards = document.querySelectorAll(".character-card");
    cards.forEach((card, i) => {
        card.style.transition = `.3s ease-in-out ${(i + 1) * 0.2}s`;
        setTimeout(() => {
            card.style.opacity = 1;
            card.style.transform = "translateY(0)";
        })
    })
}

fetchApi();

$('#pagination-container').pagination({
    dataSource: [1, 2, 3],
    pageSize: 5,
    showSizeChanger: true,
    callback: function(data, pagination) {
        // template method of yourself
        // var html = template(data);
        // dataContainer.html(html);
    }
})


//NAVBAR
const NavBarLinks = document.querySelectorAll(".link");

NavBarLinks.forEach(link => {
    link.addEventListener("click", (event) => {
        NavBarLinks.forEach(l => l.classList.remove('actif'));
        link.classList.add("actif");
    })
})

//FILTERSBAR
const filtersBarBtn = document.querySelector(".filterbar");
const filtersContents = document.querySelector(".filter-content");
const filtersClose = document.querySelector(".close");
const filtersForm = document.querySelector("form");
const allFilterInputs = document.querySelectorAll("input");
const curentFiltersContent = document.querySelector(".curent-filters-content");

filtersBarBtn.addEventListener("click", () => {
    filtersContents.classList.add("actif");
})
filtersClose.addEventListener("click", () => {
    filtersContents.classList.remove("actif");
})

allFilterInputs.forEach(input => {
    input.addEventListener("change", () => {
        if (!input.checked) {
            input.removeAttribute('checked', '');
        } else {
            input.setAttribute('checked', '');
            curentFiltersContent.innerHTML += `<div class="curent-filter">
                    <p>${input.nextElementSibling.innerText} <span>X</span></p>
                </div>`
        }
    })
})

filtersForm.addEventListener("submit", () => {
    event.preventDefault();
    console.log(allFilterInputs);
    const currentsFilters = [];
    allFilterInputs.forEach(input => {
        if (input.hasAttribute("checked")) {
            currentsFilters.push(input.value)
        }
    })
    console.log(currentsFilters)

})




// FILTERS
$(function() {
    $("#accordion").accordion({
        collapsible: true,
        active: 0,
        heightStyle: "content",
        icons: false
    });
});