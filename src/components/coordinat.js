 import React, { useState } from "react";
 
function Geo_position () {
  let [lat, setLat] = useState(0);
  let [lon, setLon] = useState(0);
  if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { coords } = position;
        setLat(coords.latitude);
        setLon(coords.longitude)
        console.log (coords.latitude, coords.longitude);
    });
  }else {
    /* определить местоположение не возможно */
  }
  console.log(lat, lon);
  return (
      <p>Geo_pos
        <p>{lat} {lon} </p>
      </p>
  )
}
export default Geo_position;