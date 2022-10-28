import "./App.css";
import Nav from "./components/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Harita from "./pages/Harita";
import Liste from "./pages/Liste";
import Weather from "./pages/Weather";
import About from "./pages/About";

function App() {


  return (
    <div className="App">
      <Nav />

      <Routes>
        <Route index element={<Home />} />
        <Route path="harita" element={<Harita />} />
        <Route path="weather/:name" element={<Weather />} />
        <Route path="liste" element={<Liste />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
