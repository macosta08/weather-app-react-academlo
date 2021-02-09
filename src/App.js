import { useEffect, useState } from "react";
import { getGeolocation } from "./utils/getGeolocation";
import { getApiWeather } from "./utils/getApiWeather";
import Spinner from "react-bootstrap/Spinner";
import { Weather } from "./components/weather/Weather";
import "./App.css";

function App() {
  const [geolocation, setGeolocation] = useState({
    lat: "",
    long: "",
    answerGeo: false,
  });
  const [dataWeather, setDataWeather] = useState("");
  const [answerApiWeather, setAnswerApiWeather] = useState(false);
  const { lat, long, answerGeo } = geolocation;

  useEffect(() => {
    getGeolocation({ setGeolocation });
  }, []);

  useEffect(() => {
    if (answerGeo)
      getApiWeather({
        lat,
        long,
        setDataWeather,
        setAnswerApiWeather,
      });
  }, [answerGeo]);

  return (
    <div className="App">
      <div className="App-weather">
        {!answerApiWeather ? (
          <Spinner animation="border" />
        ) : (
          <Weather weatherData={dataWeather} />
        )}
      </div>
    </div>
  );
}
export default App;
