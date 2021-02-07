import { useState } from "react";
import "./App.css";
import { Geolocation } from "./components/geolocation/Geolocation";

function App() {
  const [backgroundImg, setBackgroundImg] = useState("");
  return (
    <div className="App">
      <div className="App-weather" style={{ backgroundImage: backgroundImg }}>
        <Geolocation setBackgroundImg={setBackgroundImg} />
      </div>
    </div>
  );
}

export default App;
