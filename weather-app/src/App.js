import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import WeatherBox from "./component/WeatherBox";
import WeatherButton from "./component/WeatherButton";

function App() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState('');
  const cities = ["paris", "new york", "tokyo", "seoul"];
  const getCrrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      getWeatherByCurrentLocation(lat,lon)
      console.log("현재위치: ", lat, lon);
    });
  };

  const getWeatherByCurrentLocation = async (lat, lon) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=b69143c6e8136114ec5ae32406e27954&units=metric`;
    let response = await fetch(url);
    let data = await response.json();
    console.log("data: ",data);
    setWeather(data);
  };

  const getWeatherByCity = async() => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b69143c6e8136114ec5ae32406e27954&units=metric`;
    let response = await fetch(url);
    let data = await response.json();
    setWeather(data);
  }

  useEffect(() => {
    if (city === "") {
      getCrrentLocation(); // eslint-disable-next-line react-hooks/exhaustive-deps
    } else {
      getWeatherByCity();
    }
  }, [city]);

  return (
    <div>
      <div className="container">
        <WeatherBox weather={weather} />
        <WeatherButton cities={cities} setCity={setCity} />
      </div>
    </div>
  );
}

export default App;
