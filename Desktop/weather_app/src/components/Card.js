import axios from "axios";
import { useState, useEffect } from "react";


const WeatherCard = () => {

    const [weather, setWeather] = useState({});
    const [isCelsius, setIsCelsius] = useState(true);
    const [background, setBackground] = useState();


    const apiToken = "f40b1a382f651703fd8144f42a40d2fc";
    const backgroundColors = {
        hot: "background-image: linear-gradient(to right top, #d6d66e, #96da89, #4fd7b1, #00ced6, #26c0ec, #41c0f1, #56bff5, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1);",
        cold: "background-image: linear-gradient(to right top, #ffffff, #f1f7ff, #d7f3ff, #b2f1ff, #89efff, #6ce5fe, #49dbfe, #00d0ff, #00b8ff, #009eff, #0082fd, #1560ed);",
        rainy: "background-image: linear-gradient(to right top, #bc2cfb, #756bff, #008aff, #009eff, #00abe9, #00a9e2, #00a8dc, #00a6d5, #0099e1, #008aec, #0077f0, #1560ed);",
        snowy: "background-image: linear-gradient(to top, #e0fffe, #c3f1f1, #a6e3e5, #87d5da, #64c7cf, #68c6d6, #6ec5db, #76c4e0, #a5d0ed, #cbdef5, #eaedfa, #ffffff);",
        windy: "background-image: linear-gradient(to left top, #00f2ea, #5bf1e1, #7ef0da, #98efd6, #adedd4, #8be5d0, #61dccf, #02d3d2, #00bcef, #009eff, #0077ff, #342eff);",
        cloudy: "background-image: linear-gradient(to right top, #d6d66e, #96da89, #4fd7b1, #00ced6, #26c0ec, #41c0f1, #56bff5, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1);",
        foggy: "background-image: linear-gradient(to right top, #d6d66e, #96da89, #4fd7b1, #00ced6, #26c0ec, #41c0f1, #56bff5, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1);",
        stormy: "background-image: linear-gradient(to right top, #d6d66e, #96da89, #4fd7b1, #00ced6, #26c0ec, #41c0f1, #56bff5, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1);",
        clear: "background-image: linear-gradient(to right top, #ffe900, #d5f75d, #b6ff96, #abffc5, #b8ffe6, #b8ffe7, #b8ffe7, #b8ffe8, #a9ffc9, #b3ff9c, #d3ff62, #fff400);",
        default: "background-image: linear-gradient(to right top, #d6d66e, #96da89, #4fd7b1, #00ced6, #26c0ec, #41c0f1, #56bff5, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1);"
    }

  

    useEffect(() => { 

        
        var options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
      };
      
      function success(pos) {
        var crd = pos.coords;
      
        console.log('Your current position is:');
        console.log(`Latitude : ${crd.latitude}`);
        console.log(`Longitude: ${crd.longitude}`);
        console.log(`More or less ${crd.accuracy} meters.`);
        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${crd.latitude}&lon=${crd.longitude}&appid=${apiToken}`)
        .then((res) => setWeather(res.data))
      }
      
      function error(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
      }
      
      navigator.geolocation.getCurrentPosition(success, error, options);
    }, [])

    const changeUnit = () => {
        setIsCelsius(!isCelsius);
    }

    const backgroundColor = () => {
        if (weather.weather?.[0].description === "Clear") {
            return backgroundColors.clear;
        } else if (weather.weather?.[0].description === "Clouds") {
            return backgroundColors.cloudy;
        } else if (weather.weather?.[0].description === "Fog") {
            return backgroundColors.foggy;
        } else if (weather.weather?.[0].description === "Rain") {
            return backgroundColors.rainy;
        } else if (weather.weather?.[0].description === "Snow") {
            return backgroundColors.snowy;
        } else if (weather.weather?.[0].description === "Thunderstorm") {
            return backgroundColors.stormy;
        } else if (weather.weather?.[0].description === "Wind") {
            return backgroundColors.windy;
        } else {
            return backgroundColors.default;
        }
    }

    let celsius =  Math.trunc((weather.main?.temp -273.15) );
    const farenheit = Math.trunc(weather.main?.temp);
        
    return (
        <div className='container'>
            <div className='panel-container'>
                
                <div className='panel'>
                <h2 className='location'> {weather.name}, {weather.sys?.country}</h2>
                
                </div>
                <div className='weather-container'>
                    <div className='group secondary'>
                        <h3 className='date-weather'>Monday: {weather.timezone}</h3>

                        <h3 id='description'>{weather.weather?.[0].description}</h3>
                    </div>
                    
                    <div className='group secondary'>
                        <h3 id='wind'>Wind: {weather.wind?.speed}m/s</h3>
                        <h3 id='humidity'>Humidity: {weather.main?.humidity}%</h3>
                    </div>
                    <div className='group secondary'>
                        <h3 id='wind'>Pressure: {weather.main?.pressure}hPa</h3>
                    </div>
                    <div className='temperature' id='temperature'>
                        <h1 className='temp'><i></i> <span>{isCelsius ? `${farenheit}`: `${celsius}`}</span><a className='fahrenheit active' onClick={changeUnit}>&deg;F</a><span className='divider secondary'>|</span><a onClick={changeUnit} className='celsius'>&deg;C</a></h1>
                    </div>
                    <div className='forecast'><h4>Feels like {isCelsius ? `${Math.trunc(weather.main?.feels_like)}F`: `${Math.round(weather.main?.feels_like -273.15)}C`} | {weather.weather?.[0].description} | {weather.weather?.[0].main}</h4></div>
                </div>
            </div> 
        </div>
    )
}

export default WeatherCard;