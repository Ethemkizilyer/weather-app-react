import React from 'react'
import { useEffect, useState } from "react";
import { useParams, useLocation, useNavigate, Outlet } from "react-router-dom";
import Turkey from './TurkeyMap';
import TurkeyMap from './TurkeyMap';

const Home = () => {
      const navigate = useNavigate();
  return (
    <div>
      <div>
        <h1>Hoşgeldiniz</h1>
        <h5>Diğer illerin hava durumu için lütfen tıklayınız</h5>
      </div>
      <div>
        <button onClick={() => navigate("harita")}
          
          className="btn btn-success me-2"> Türkiye Haritası
        </button>
        <button onClick={() => navigate("liste")}
          
          className="btn btn-warning"> Türkiye İller Listesi
        </button>
      </div>
      <Turkey />
    </div>
  );
}

export default Home