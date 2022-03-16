import React from "react";
import "./Results.css";
import Time from "./Time";
import WeatherIcon from "./WeatherIcon";

export default function Results(props) {
  // console.log(props);
  if (props.weather.location) {
    return (
      <div className="Results">
        <div className="row">
          <div className="col-6">
            <h2>
              {props.weather.location}, {props.weather.country}
            </h2>
            <h5>Last update:</h5>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <Time />
            <h4 className="description">{props.weather.description}</h4>
            <h4 className="Weather-summary">
              <div className="float-left">
                <WeatherIcon code={props.weather.icon} size={64} />
              </div>
              <span className="temperature">
                {Math.round(props.weather.temperature)}
              </span>
              <span className="unit">°C</span>
            </h4>
          </div>
          <div className="col-6">
            <h4>Humidity: {props.weather.humidity}%</h4>
            <h4>Wind: {props.weather.wind}m/sec</h4>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
