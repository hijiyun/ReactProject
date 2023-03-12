import './App.css';
import { useEffect, useState } from "react";



function App() {
  const getCrrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => { 
      let lat = position.coords.latitude
      let lon = position.coords.longitude
      console.log("현재위치: ",lat,lon)
    });
  }
  useEffect(() => {
    getCrrentLocation()
  },[])
  return (
    <div>
      <h1>Hi</h1>
    </div>
  );
}

export default App;
