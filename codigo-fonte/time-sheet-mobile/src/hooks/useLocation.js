import React from "react";
import * as local  from "expo-location"

export function useLocation(){
    const[lat, setLat] =React.useState(0);
    const[long, setLong] = React.useState(0);
    const[latLoja, setLatLoja] = React.useState(-20.297);
    const[longLoja, setLongLoja] = React.useState(-40.297);
    const [locationValid, setLocationValid] = React.useState(true);


  async function checkLocation(){
      let pos = await local.getCurrentPositionAsync()
      setLat(pos.coords.latitude)
      setLong(pos.coords.longitude)
  
  if((lat <= latLoja + 0.001 && lat >= latLoja - 0.001 ) && (long <= longLoja +0.001 && lat >= latLoja - 0.001)){

      setLocationValid(true)
      return(true)
  } else{
      setLocationValid(false)
      return(false)
  }
}
  return{
    locationValid,checkLocation
  }
}
   