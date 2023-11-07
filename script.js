const clicked = () => {
    let inputWeather = sec.value
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${inputWeather}&appid=a8f14d96d778cedfab60b13ef05347af`

    fetch(url)
        .then(response => response.json())
        // console.log(response);
        .then((result) => {
            if (inputWeather == "") {
                showError.innerHTML = `Please fill`
            } else {
                let city = result.name;
                let temp = Math.round(result.main.temp - 273);
                let weather = result.weather[0].main
                let citys = result.name;
                let temps = Math.round(result.main.temp - 273);
                let weathers = result.weather[0].main
                sec.value = ""
                showError.innerHTML = ``
                disp.innerHTML= ""
                display.innerHTML = ""

                const getWeather = {
                    city,
                    temp,
                    weather,
                    citys,
                    temps,
                    weathers,
                };
                localStorage.setItem("getWeather", JSON.stringify(getWeather));
                document.getElementById("disp").innerHTML += `
                <div class="feels">
                <h2>${temp}°C</h2>
                <p>${city}, NG</p>
                <p>broken ${weather}</p>
                <img src="image/04d@2x.png" alt="">
                </div>`
                document.getElementById("display").innerHTML +=`
                <div class="feeling">
                <p>Location: &nbsp;&nbsp;&nbsp;${citys}, NG</p>
                <p>Description: &nbsp;&nbsp;&nbsp;broken ${weathers}</p>
                <p>temps: &nbsp;&nbsp;&nbsp;${temps}°C</p>
                </div>
                `
            }
            console.log(result);
        })
        }

        window.addEventListener('load', () => {
            const storedGetWeather = localStorage.getItem('getWeather');
            if(storedGetWeather) {
                const getWeather = JSON.parse(storedGetWeather);
                disp.innerHTML += `
                <div class="feels">
                <h2>${getWeather.temp}°C</h2>
                <p>${getWeather.city}, NG</p>
                <p>broken ${getWeather.weather}</p>
                <img src="image/04d@2x.png" alt="">
                </div>`
                display.innerHTML +=`
                <div class="feeling">
                <p>Location: &nbsp;&nbsp;&nbsp;${getWeather.citys}, NG</p>
                <p>Description: &nbsp;&nbsp;&nbsp;broken ${getWeather.weathers}</p>
                <p>temps: &nbsp;&nbsp;&nbsp;${getWeather.temps}°C</p>
                </div>
                `
            }
        });