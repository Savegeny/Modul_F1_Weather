import React, {useState, useEffect, Component} from "react";
import axios from "axios";

import "../styles/App.css";

import Geo_position from "./coordinaty";

function Weather(){
    const [city, setCity] = useState([]);
    const [weather, setWeather] = useState([]);
    const [wind, setWind]= useState([]);

     useEffect(() => {
    axios.get("http://api.openweathermap.org/data/2.5/weather?q=moscow&appid=2f35997f952b7aa5115b5f3b3f948196&units=metric&lang=ru")
    .then(res =>{console.log(res);
    setCity(res.data);
    setWeather(res.data.main);
    setWind(res.data.wind);
    });

    }, []);
    return (

        <table>
                <p name="City">{city.name}</p>
                <p name="Temp">{weather.temp}</p>
                <p name="Wind">{wind.speed}</p>
        </table>
    );

}

export default Weather;