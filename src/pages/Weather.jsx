import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const Weather = () => {

  const [ekle, setEkle] = useState();
  const { state } = useLocation();
  const [sadık, setSadık] = useState(state);
console.log(state);
  const ethem = async () => {
    const apiKey = "9bad0bd4b134dd63910604be2575cdc7";

    const ara = await axios(
      `https://api.openweathermap.org/data/2.5/weather?q=${sadık}&appid=${apiKey}&units=metric&lang=tr`
    );

    const {
      name,
      main: { feels_like },
      weather,
      wind: { speed, deg },
    } = ara.data;
    const { description, icon } = weather[0];
    setEkle({ name, feels_like, speed, deg, description, icon });
  };
 useEffect(()=>{
ethem()
 },[state])
  return (
    <div
      className="card mx-auto"
      style={{
        borderRadius: "35px",
        width: "25%",
        height: "50%",
        margin: "1rem",
        backgroundColor: "rgb(100 100 200)",
      }}
    >
      <div className="card-body">
        <div className="d-flex" style={{ color: "#96c6da" }}>
          <p className="h4">{ekle?.name}</p>
        </div>
        <div className="d-flex flex-column text-center mt-5 mb-4">
          <h1>{ekle?.feels_like}</h1>
          <h3>{ekle?.description}</h3>
        </div>
      </div>
      <div className="d-flex align-items-center">
        <div className="flex-grow-1" style={{ fontSize: "1rem" }}>
          <div>
            <i className="fas fa-wind fa-fw" style={{ color: "#868B94" }}></i>
            <span className="ms-1"> {ekle?.speed} km/h</span>
          </div>
          <div>
            <i className="fas fa-tint fa-fw" style={{ color: "#868B94" }}></i>
            <span className="ms-1"> {ekle?.deg} </span>%
          </div>
        </div>
        <div>
          <img
            className="city-icon"
            style={{ height: "55px" }}
            src={`http://openweathermap.org/img/wn/${ekle?.icon}.png`}
            alt={ekle?.name}
          />
        </div>
      </div>
    </div>
  );
};

export default Weather;
