import './App.css';
import { useEffect, useState } from "react";



function App() {
  const getCrrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => { 
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      console.log(lat,lon);
      getWeatherByCurrentLocation(lat,lon);
    });
  };

  const getWeatherByCurrentLocation =(lat,lon)=>{
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=b69143c6e8136114ec5ae32406e27954`
  };

  useEffect(() => {
    getCrrentLocation() // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
  return (
    <div>
      <h1>Hi</h1>
    </div>
  );
}

export default App;
