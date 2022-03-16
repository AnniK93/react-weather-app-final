import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import WeatherForecast from "./WeatherForecast";
import "./Search.css";

export default function Search() {
  let [location, setLocation] = useState();
  let [weather, setWeather] = useState({ ready: false });
  let apiKey = "6697611895f9d8bb5ac23403332f6cdd";
  let units = "metric";

  function showWeather(response) {
    // console.log(response);

    setWeather({
      ready: true,
      location: response.data.name,
      country: response.data.sys.country,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: response.data.weather[0].icon,
      description: response.data.weather[0].description,
    });
  }
  function handleSubmit(event) {
    event.preventDefault();

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=${units}`;

    axios.get(url).then(showWeather);
  }

  function updateLocation(event) {
    setLocation(event.target.value);
  }

  //Search for current location

  function handlePosition(position) {
    let lat = `${position.coords.latitude}`;
    let lon = `${position.coords.longitude}`;

    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;

    axios.get(apiUrl).then(showWeather);
  }

  function searchCurrentLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(handlePosition);
  }

  //Search for random location

  function searchRandomLocation(event) {
    event.preventDefault();
    let cityArray = [
      "Hongkong",
      "Kuala Lumpur",
      "Pune",
      "Berlin",
      "Paris",
      "Bangkok",
      "Antananarivo",
      "Cairo",
      "Madrid",
      "Lima",
      "Beijing",
      "Tokyo",
      "Sydney",
      "Wellington",
      "Cardiff",
      "Delhi",
      "Caracas",
      "Vilnius",
      "Minsk",
      "Lomé",
      "Ouagadougou",
      "Kaunas",
      "Montreal",
      "Sherbrooke",
      "Calgary",
      "Louisiana",
      "Chicago",
      "Brasilia",
      "Lisbon",
      "Riga",
      "Stockholm",
      "Helsinki",
      "Singapore",
      "New York",
      "Los Angeles",
      "San Francisco",
      "Mexico City",
      "Taipeh",
      "Adelaide",
      "Brighton",
      "Dortmund",
      "Dijon",
      "Montpellier",
      "Barcelona",
      "Canberra",
      "Kabul",
      "Tirana",
      "Dhaka",
      "Brussels",
      "Vienna",
      "Munich",
      "Buenos Aires",
      "Baku",
      "Sarajevo",
      "Sofia",
      "Yaoundé",
      "Kinshasa",
      "Ottawa",
      "Phnom Penh",
      "Havana",
      "Quito",
      "Tallinn",
      "Addis Ababa",
      "Libreville",
      "Tbilisi",
      "Accra",
      "Athens",
      "Budapest",
      "Reykjavik",
      "Jakarta",
      "Nairobi",
      "Bishkek",
      "Tripoli",
      "Valletta",
      "Monaco",
      "Windhoek",
      "Cape Town",
      "Pyongyang",
      "Belfast",
      "Oslo",
      "Muscat",
      "Islamabad",
      "Doha",
      "Riyadh",
      "Mogadishu",
      "Seoul",
      "Nuuk",
      "Bern",
      "Zurich",
      "Damascus",
      "Jerusalem",
      "Ankara",
      "Montevideo",
      "Vatican City",
      "Hanoi",
      "Lusaka",
    ];
    let location = cityArray[Math.floor(Math.random() * cityArray.length)];

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=${units}`;

    axios.get(url).then(showWeather);
  }

  if (weather.ready) {
    return (
      <div className="Search">
        <div className="row city-names">
          <div className="col-3">
            <h4>Moscow</h4>
          </div>
          <div className="col-3">
            <h4>Berlin</h4>
          </div>
          <div className="col-3">
            <h4>London</h4>
          </div>
          <div className="col-3">
            <h4>New York</h4>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Enter a city..."
            onChange={updateLocation}
          />
          <button type="Submit">Search</button>
          <button type="Submit" onClick={searchCurrentLocation}>
            📍 Current location
          </button>
          <button type="Submit" onClick={searchRandomLocation}>
            🗺 Random location
          </button>
        </form>
        <Results weather={weather} />
        <WeatherForecast coordinates={weather.coordinates} />
      </div>
    );
  } else {
    return (
      <div className="Search">
        <div className="row city-names">
          <div className="col-3">
            <h4>Moscow</h4>
          </div>
          <div className="col-3">
            <h4>Berlin</h4>
          </div>
          <div className="col-3">
            <h4>London</h4>
          </div>
          <div className="col-3">
            <h4>New York</h4>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Enter a city..."
            onChange={updateLocation}
          />
          <button type="Submit">Search</button>
          <button type="Submit" onClick={searchCurrentLocation}>
            📍 Current location
          </button>
          <button type="Submit" onClick={searchRandomLocation}>
            🗺 Random location
          </button>
        </form>
      </div>
    );
  }
}
