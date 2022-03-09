import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";

export default function Search() {
  let [location, setLocation] = useState();
  let [weather, setWeather] = useState({});

  function showWeather(response) {
    //console.log(response);

    setWeather({
      location: response.data.name,
      country: response.data.sys.country,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "6697611895f9d8bb5ac23403332f6cdd";
    let units = "metric";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=${units}`;

    axios.get(url).then(showWeather);
  }

  function updateLocation(event) {
    setLocation(event.target.value);
  }

  return (
    <div className="Search">
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Enter a city..."
          onChange={updateLocation}
        />
        <button type="Submit">Search</button>
        <button type="Submit">📍 Current location</button>
        <button type="Submit">🗺 Random location</button>
      </form>
      <Results weather={weather} />
    </div>
  );
}
