import React from "react";
import TurkeyMap from "turkey-map-react";
import useTurkeyCities from "use-turkey-cities";
import { useState } from "react";
import Tooltip from "@mui/material/Tooltip";
import { useNavigate, useParams } from "react-router-dom";

const Harita = () => {

  const navigate = useNavigate();

  const [bir, setBir] = useState("Ankara");
  const [ekle, setEkle] = useState();
  const [yukarı, setYukarı] = useState("06 / Ankara");

  const [title, setTitle] = useState("");


  const renderCity = (cityComponent, cityData) => (
    <Tooltip title={cityData.name} key={cityData.id}>
      {cityComponent}
    </Tooltip>
  );

  return (
    <div>
      <h5>{yukarı}</h5>
      <div className="d-flex mt-5 justify-content-center align-items-center">
        <div style={{ width: "800px" }}>
          <TurkeyMap
            customStyle={{
              idleColor: "red",
              hoverColor: "orange",
              border: "5px ",
            }}
            cityWrapper={renderCity}
            onHover={({ plateNumber, name }) =>
              setYukarı(`${plateNumber} / ${name}`)
            }
            onClick={({ plateNumber, name }) =>
              navigate(`/weather/${name}`, { state: name })
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Harita;
