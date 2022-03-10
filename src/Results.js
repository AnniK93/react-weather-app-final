import React from "react";
import "./Results.css";
import Time from "./Time";

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
            <h4>Last update:</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <Time />
            <h3 className="description">{props.weather.description}</h3>
            <h3 className="Weather-summary">
              <img src={props.weather.icon} alt={props.weather.description} />
              <span>{Math.round(props.weather.temperature)}</span>
              <span className="unit">°C</span>
            </h3>
          </div>
          <div className="col-6">
            <h3>Humidity: {props.weather.humidity}%</h3>
            <h3>Wind: {props.weather.wind}m/sec</h3>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
