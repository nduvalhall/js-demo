const ButtonAddCity = document.getElementById("btn-add-city")
const ListCities = document.getElementById("li-cities")

const cities = []

function renderCities() {
    let html = ""

    for (city of cities) {
        html = html + `<li>${city}</li>`
    }

    ListCities.innerHTML = html
}
renderCities()

function addCity() {
    const city = window.prompt("City:")

    if (city != null) {
        cities.push(city)
        renderCities()
    }
}

if (ButtonAddCity != null) {
    ButtonAddCity.addEventListener("click", addCity)
}
