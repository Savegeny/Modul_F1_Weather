import React, {useState, useEffect, Component} from "react";
import axios from "axios";

import "../styles/App.css";

import Geo_position from "./coordinat";

console.log(Geo_position.coords);
console.log(Geo_position.coords ? Geo_position.coords : '"lon":37.6156, "lon":37.6156');

function Weather(){
    const [city, setCity] = useState([]);
    const [weather, setWeather] = useState([]);
    const [wind, setWind]= useState([]);
    const APIkey = 'b21010128cfac18e7f8134054229e526';
    const coords = {
        lon: 37.6156,
        lat: 55.7522
    }

    const geo_coor = Geo_position.coords ? Geo_position.coords : coords;
    console.log(geo_coor);

     useEffect(() => {
    //axios.get(`"http://api.openweathermap.org/data/2.5/weather?q=${}&appid=2f35997f952b7aa5115b5f3b3f948196&units=metric&lang=ru"`)
    //axios.get("http://api.openweathermap.org/data/2.5/weather?q=moscow&appid=2f35997f952b7aa5115b5f3b3f948196&units=metric&lang=ru")
    axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${geo_coor.lat}&lon=${geo_coor.lon}&appid=${APIkey}`)
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