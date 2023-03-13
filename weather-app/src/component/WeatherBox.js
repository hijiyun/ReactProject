import React from 'react'

const WeatherBox = ({weather}) => {
  console.log("weather?", weather);
  return (
    <div className='weather-box'>
      <div>{weather?.name}</div>
      <h3>온도 : {weather?.main.temp}</h3>
      <h3>{weather?.weather[0].description}</h3>
      <h3>습도 : {weather?.main.humidity}</h3>
    </div>
  )
}

export default WeatherBox
