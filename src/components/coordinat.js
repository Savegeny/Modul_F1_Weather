 import React, { useState } from "react";
 
function Geo_position () {
  let [lat, setLat] = useState(0);
  let [lon, setLon] = useState(0);
  if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { coords } = position;
        setLat(coords.latitude);
        setLon(coords.longitude)
        console.log ('coordinaty ',coords.latitude, coords.longitude);
    });
  }else {
    /* определить местоположение не возможно */
  }
  console.log(coords.latitude, coords.longitude);
  return (
      coords
      //<p>Geo_pos
      //  <p>{coords.latitude} {coords.longitude} </p>
      //</p>
  )
}
export default Geo_position;