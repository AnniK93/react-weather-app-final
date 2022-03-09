import React from "react";

export default function Time() {
  let now = new Date();

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let currentDay = days[now.getDay()];
  let minutes = now.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let hours = now.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }

  let currentTime = `${hours}:${minutes}`;

  return (
    <div className="Time">
      <h3>
        {currentDay} {currentTime}
      </h3>
    </div>
  );
}
