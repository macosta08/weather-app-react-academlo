import { useState } from "react";
import "./App.css";
import { Geolocation } from "./components/geolocation/Geolocation";

function App() {
  const [climateColor, setClimateColor] = useState("blue");
  return (
    <div className="App">
      <div className="App-weather" style={{ background: climateColor }}>
        <Geolocation setClimateColor={setClimateColor} />
      </div>
    </div>
  );
}

export default App;
