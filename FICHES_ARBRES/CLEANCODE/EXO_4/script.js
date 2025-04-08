const coordonates = [[48.8534, 2.3488, 'paris'], [45.75, 4.85, 'lyon'], [47.2173, -1.5534, 'nantes'], [43.3, 5.4, 'marseille'], [50.633333, 3.066667, 'lille']];

const fetchWeather = async (coordonates) => {
    coordonates.forEach(async coor => {
        let resp = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${coor[0]}&longitude=${coor[1]}&current=temperature_2m,rain`)
        let json = await resp.json()
        console.log(json.current.rain)
        document.getElementById(`pluie_${coor[2]}`).innerHTML = "<strong>" + json.current.rain + "</strong>"
        document.getElementById(`degres_${coor[2]}`).innerHTML = "<strong>" + json.current.temperature_2m + "</strong>"
    });
}
  
fetchWeather(coordonates);