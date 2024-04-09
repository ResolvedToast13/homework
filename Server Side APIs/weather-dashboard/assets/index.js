let responseData = [];
const doc = document,
    apiKey = '932ef43cd154abe1ac0b6178dba6abe3',
    urlLatLong = function (value) { 
        return `https://api.openweathermap.org/data/2.5/forecast?lat=${value.lat}&lon=${value.long}&appid=${apiKey}&units=imperial`;
    },
    urlCity = function (value) {
        return `https://api.openweathermap.org/data/2.5/forecast?q=${value.cityName},us&appid=${apiKey}&units=imperial`;
    },
    getApiData = function (api, value) {
        fetch(api(value))
            .then(function (response) { 
                if (response.ok) {
                    return response.json();
                }
                throw new Error('Something went wrong');
             })
            .then(function (data) { responseData.push(data) })
            .catch(function (err) {
                doc.getElementById('searchCity').disabled = false;
                console.log(err); 
            })
    };


(function () {

    doc.addEventListener('DOMContentLoaded', function () {
        const cityNameInput = doc.getElementById('cityName');
        const searchBtn = doc.getElementById('searchCity');
        const historical = doc.getElementById('historical');
        var cityWeather = null;

        var citiesSearched = JSON.parse(localStorage.getItem('citiesSearched'));

        if (!citiesSearched) {
            citiesSearched = [];
            localStorage.setItem('citiesSearched', JSON.stringify(citiesSearched));
        } else {
            Array.from(citiesSearched).forEach(function (city) {
                const cityBtn = doc.createElement('button');
                cityBtn.className = 'cities center-elements'
                cityBtn.innerText = city
                cityBtn.addEventListener('click', function () {
                    const cityName = this.textContent;
                    getApiData(urlCity, { cityName });
                    doc.getElementById('cityInfo').innerHTML = ''
                    doc.getElementById('cityInfo').style.display = 'none'
                    doc.querySelectorAll('.fiveDays').forEach(function (element) {
                        element.style.display = 'none'
                    })
                    cityNameInput.value = ''
                })
                historical.appendChild(cityBtn)
            });
        }

        cityNameInput.value = ''
        searchBtn.addEventListener('click', function () {
            this.disabled = true;
            const cityName = cityNameInput.value;
            getApiData(urlCity, { cityName });
            doc.getElementById('cityInfo').innerHTML = ''
            doc.getElementById('cityInfo').style.display = 'none'
            doc.querySelectorAll('.fiveDays').forEach(function (element) {
                element.style.display = 'none'
            })
            cityNameInput.value = ''
        });

        setInterval(function () {
            if (responseData[0] && responseData[0].cod != '404') {
                const weatherEmoji = {
                    Clear: '☀️',
                    Clouds: '⛅',
                    Rain: '🌧️',
                    Snow: '❄️'
                };

                cityWeather = responseData[0];
                const searchBtn = doc.getElementById('searchCity');
                searchBtn.disabled = false;
                responseData = [];

                const { city, list } = cityWeather;
                const today = list[0];
          
                citiesSearched = Array.from(JSON.parse(localStorage.getItem('citiesSearched')));

                if (!citiesSearched.includes(city.name)) {
                    citiesSearched.push(city.name);
                }
                historical.innerHTML = '';
                citiesSearched.forEach(function (city) {
                    const cityBtn = doc.createElement('button');
                    cityBtn.className = 'cities center-elements'
                    cityBtn.innerText = city
                    cityBtn.addEventListener('click', function () {
                        const cityName = this.textContent;
                        getApiData(urlCity, { cityName });
                        doc.getElementById('cityInfo').innerHTML = ''
                        doc.getElementById('cityInfo').style.display = 'none'
                        doc.querySelectorAll('.fiveDays').forEach(function (element) {
                            element.style.display = 'none'
                        })
                        cityNameInput.value = ''
                    })
                    historical.appendChild(cityBtn)
                });
                localStorage.setItem('citiesSearched', JSON.stringify(citiesSearched));

                const cityName = doc.createElement('h2');
                cityName.innerText = `${city.name} (${(new Date()).toLocaleDateString("en-us", today.dt_txt)}) ${weatherEmoji[today.weather[0].main]}`;
                const cityTemp = doc.createElement('h3');
                cityTemp.innerText = `Temp: ${today.main.temp}${String.fromCharCode(176)}F`;
                const cityWind = doc.createElement('h3');
                cityWind.innerText = `Wind: ${today.wind.speed} MPH`;
                const cityHumidity = doc.createElement('h3');
                cityHumidity.innerText = `Humidity: ${today.main.humidity} ${String.fromCharCode(37)}`

                const cityContainer = doc.createElement('div');
                cityContainer.className = 'mg-10 pd-10'
                cityContainer.appendChild(cityName);
                cityContainer.appendChild(cityTemp);
                cityContainer.appendChild(cityWind);
                cityContainer.appendChild(cityHumidity)
                doc.getElementById('cityInfo').appendChild(cityContainer);
                doc.getElementById('cityInfo').style.display = 'block';

                doc.querySelectorAll('.fiveDays').forEach(function (element) {
                    element.style.display = '';
                    if(element.tagName == 'DIV') {
                        const weatherCards = element.children

                        const days = list.filter(function(_, e) { return (e % 8 == 0 && e != 0)|| e == 4  });
                        for (var i = 0; i < weatherCards.length; i++) {
                            var card = weatherCards[i];
                            card.innerHTML = '';
                            const day = days[i]
                            
                            
                            const cityDate = doc.createElement('h3');
                            cityDate.innerText = `(${(new Date(day.dt_txt)).toLocaleDateString("en-us", day.dt_txt)}) ${weatherEmoji[day.weather[0].main]}`;

                            const cityTemp = doc.createElement('h3');
                            cityTemp.innerText = `Temp: ${day.main.temp}${String.fromCharCode(176)}F`;
                            const cityWind = doc.createElement('h3');
                            cityWind.innerText = `Wind: ${day.wind.speed} MPH`;
                            const cityHumidity = doc.createElement('h3');
                            cityHumidity.innerText = `Humidity: ${day.main.humidity} ${String.fromCharCode(37)}`

                            const cityContainer = doc.createElement('div');
                            cityContainer.className = 'mg-10 pd-10'
                            cityContainer.appendChild(cityDate);
                            cityContainer.appendChild(cityTemp);
                            cityContainer.appendChild(cityWind);
                            cityContainer.appendChild(cityHumidity)

                            card.appendChild(cityContainer)
                        }
                    }
                });

                
            }
        }, 1000);
        
    });
        
})();

