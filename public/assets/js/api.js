//This variable endpoint stores the url of the api
const endpoint = "http://api.weatherapi.com/v1/current.json?key=cd26156ce72b448aa42234110250802&q="

//This function's responsability is to fetch the api data by receiving city location
async function getWeather(city) {
    try {
        const response = await fetch(`${endpoint}${city}`)
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error)
    }
}

const cityElem = document.getElementById("location")

async function handleCityChange(event) {
    //Here is where I get the value the user selected 
    const city = event.target.value
    //Here I am checking if the value is not empty
    if (!city) { return }
    const weather = await getWeather(city) //this line is requesting the api for the data

    const elem = document.getElementById("temp")
    elem.innerHTML = `${weather.current.temp_c}°C`

    const elem2 = document.getElementById("condition")
    elem2.innerHTML = weather.current.condition.text

    const elem3 = document.getElementById("icon")
    elem3.src = weather.current.condition.icon

    const infoBox = document.getElementById("infoBox")
    infoBox.classList.remove("hidden")
}


cityElem.addEventListener("change", handleCityChange)

//Here, I am storing the cities for the user to select
const gtaCities = [
    "Aurora",
    "Brampton",
    "Burlington",
    "Caledon",
    "Halton Hills",
    "Markham",
    "Milton",
    "Mississauga",
    "Newmarket",
    "Oakville",
    "Oshawa",
    "Richmond Hill",
    "Toronto",
    "Vaughan"
];

//this script fills the select element with the items in the array above
window.onload = () => {
    for (const city of gtaCities) {
        const option = document.createElement("option")
        option.value = `${city} ontario canada`
        option.innerHTML = city
        cityElem.appendChild(option)
    }
}
