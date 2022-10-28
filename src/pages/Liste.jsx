import React from "react";
import useTurkeyCities from "use-turkey-cities";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate} from "react-router-dom";

const Liste = () => {
  const { cities, city, setCity, districts, district, setDistrict } =
    useTurkeyCities();

  const [bir, setBir] = useState(city);
  const [ekle, setEkle] = useState();
const navigate = useNavigate();
  const ethem = async () => {
    const apiKey = "9bad0bd4b134dd63910604be2575cdc7";

    const ara = await axios(
      `https://api.openweathermap.org/data/2.5/weather?q=${bir}&appid=${apiKey}&units=metric&lang=tr`
    );
    console.log(ara.data);
    const {
      name,
      main: { feels_like },
      weather,
      wind: { speed, deg },
    } = ara.data;
    const { description, icon } = weather[0];
    setEkle({ name, feels_like, speed, deg, description, icon });
  };

  useEffect(() => {
    ethem();
    console.log(bir);
  }, [bir]);

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setBir(city);
          
        }}
      >
        <select
          className="form-select w-50 text-center mx-auto"
          onChange={(e) => {
            setCity(e.target.value);
          }}
          value={city}
        >
          {cities.map((city) => (
            <option key={`city-${city}`} value={city}>
              {city}
            </option>
          ))}
        </select>
        <br />

        <br />
        <button
          className="btn btn-dark"
          type="submit"
          onClick={() => navigate(`/weather/${city}`, { state: city })}
        >
          Submit
        </button>
      </form>
   
    </div>
  );
};
export default Liste;
