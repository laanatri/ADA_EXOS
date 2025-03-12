const breweriesContent = document.querySelector(".breweries-content");

const getCities = async (breweries) => {
    let cities = [];
    const response = await fetch("https://api.openbrewerydb.org/v1/breweries");
    let datas = await response.json();
    console.log(datas)
    for (const brewery of datas) {
        if (!cities.includes(brewery.city)) {
            cities.push(brewery.city)
        }
    }
    return cities.sort();
}

const breweriesMetaInit = async (city = "") => {
    const responseInit = await fetch(`https://api.openbrewerydb.org/v1/breweries/meta?by_city=${city}`);
    let datasInit = await responseInit.json();
    return datasInit;
}

const getBreweries = async (city = "") => {
    const metas = await breweriesMetaInit(city);
    console.log(metas)

    city = city.split(" ").join("_").toLowerCase();
    let url = `https://api.openbrewerydb.org/v1/breweries?by_city=${city}&page=1&per_page=10`;
    const response = await fetch(url);
    let datas = await response.json();
    return await datas;

    // if (city === "") return datas;
    // return datas = datas.filter((brewerie) => brewerie.city === city)
}

const dislayBreweries = async (value = "") => {
    breweriesContent.innerHTML = "";
    const breweriesList = await getBreweries(value)
    for await (const brewery of breweriesList) {
        breweriesContent.innerHTML += `<div class="brewery-card">
            <p class="name">${brewery.name}</p>
            <p class="address">${brewery.address_1}<br>${brewery.city}</p>
            <p class="tel">${brewery.phone}</p>
            ${brewery.website_url ? `<a class="site" href="${brewery.website_url}" target="_blank">${brewery.website_url}</a>` : `The brewery does not have a website.`}
        </div>`
    }
}

// search
$(async function() {
    var availableTags = await getCities(await getBreweries());
    $( "#tags" ).autocomplete({
      source: availableTags,
    });
});

$('#tags').change(function () {
    dislayBreweries(this.value);
}).change();

// pagination
let pages = [1, 2, 3];

$('#pagination-container').pagination({
    dataSource: pages,
    pageSize: 5,
    showSizeChanger: true,
    callback: function(data, pagination) {
        // template method of yourself
        var html = template(data);
        dataContainer.html(html);
    }
})