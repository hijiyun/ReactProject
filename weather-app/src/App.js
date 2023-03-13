import './App.css';
import { useEffect, useState } from "react";
import WeatherBox from './component/WeatherBox';
import 'bootstrap/dist/css/bootstrap.min.css';
import WeatherButton from './component/WeatherButton';




function App() {
  const getCrrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => { 
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      console.log(lat,lon);
      getWeatherByCurrentLocation(lat,lon);
    });
  };

  const getWeatherByCurrentLocation =async(lat,lon)=>{
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=b69143c6e8136114ec5ae32406e27954`
    let response = await fetch(url);
    let data = await response.json();
    console.log("data: ",data)
  };

  useEffect(() => {
    getCrrentLocation() // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
  return (
    <div>
      <WeatherBox />
      <WeatherButton />
    </div>
  );
}

export default App;
