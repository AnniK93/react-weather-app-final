import React from "react";

export default function WeatherIcon(props) {
  //console.log(props.code);
  //console.log(props.alt);
  return (
    <div className="WeatherIcon">
      {props.code}
      <img
        src="https://raw.githubusercontent.com/divyanshu013/react-animated-weather/HEAD/react-animated-weather.gif"
        alt={props.alt}
      />
    </div>
  );
}
