let gensListContent = document.querySelector("#gens-list");
let pokemonContent = document.querySelector(".pokemon-content");
let inputsFilter = document.querySelectorAll("input");

async function checkIfLegMyt(url, types = []) {
    let go = false;
    if (types.length === 0) {
        go = true;
    } else {
        const response = await fetch(url);
        const pokemonDatasContent = await response.json();
        types.map(async (t) => {
            if (pokemonDatasContent[t] === true) {
                go = true;
            }
        })
    }
    return go;
}

function displaypokemon(p) {
    pokemonContent.innerHTML += `<div class="pokemon-card">
        <p>${p.name}</p>
        <img src="https://img.pokemondb.net/artwork/${p.name}.jpg" alt="">
    </div>`;
}

async function selectGen(value) {
    const response = await fetch(`https://pokeapi.co/api/v2/generation/${value}`);
    const pokemons = await response.json();
    return await pokemons.pokemon_species;
}

const displayGenList = (list) => {
    list.map((gen, i) => {
        gensListContent.innerHTML += `<option value="${i + 1}">${gen.name.toUpperCase()}</option>`
    })
}

async function handleDisplays() {
    const pokemonSelectedList = await selectGen(gensListContent.value);
    pokemonContent.innerHTML = "";
    const byTypes = [];
    inputsFilter.forEach(async (input) => {
        if (input.checked) {
            byTypes.push(input.dataset.value)
        }
    })
    await pokemonSelectedList.map(async (pokemon) => {
        if (await checkIfLegMyt(pokemon.url, byTypes) === true) {
            displaypokemon(pokemon);
        }
    })
}

async function  fetchPokeApi() {
    const response = await fetch('https://pokeapi.co/api/v2/generation/');
    const pokemonsGen = await response.json();
    displayGenList(pokemonsGen.results);
    gensListContent.addEventListener("change", async () => {
        handleDisplays();
    })
    inputsFilter.forEach(input => {
        input.addEventListener("change", async () => {
            handleDisplays();
        })
    })
}

fetchPokeApi();