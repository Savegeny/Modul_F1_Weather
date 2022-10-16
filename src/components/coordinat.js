 import React, { useState } from "react";
 
function Geo_position () {
  let [lat, setLat] = useState(0);
  let [lon, setLon] = useState(0);
  if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { coords } = position;
        setLat(coords.latitude);
        setLon(coords.longitude)

    });
  }else {
    /* определить местоположение не возможно */
  }

  return (
      coords
  )
}
export default Geo_position;