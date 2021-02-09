import { useEffect, useState } from "react";
import { Geolocation } from "./utils/Geolocation";
import { APIURL, APIKEY } from "./utils/apiWeatherConfigFile";
import Spinner from "react-bootstrap/Spinner";
import { Weather } from "./components/weather/Weather";
import "./App.css";

function App() {
  const [geolocation, setGeolocation] = useState({
    lat: "",
    long: "",
    anwersGeolocation: false,
  });
  const [dataWeather, setDataWeather] = useState("");
  const [answerApiWeather, setAnswerApiWeather] = useState(false);
  //const [error, setError] = useState(false);
  const { lat, long, anwersGeolocation } = geolocation;
  const { name, sys, weather, main } = dataWeather;

  useEffect(() => {
    Geolocation({ setGeolocation });
    console.log(geolocation);
  }, []);
  useEffect(() => {
    const consultApiWeather = async (units = "metric") => {
    setTimeout(() => {
        //if (anwersGeolocation) {
        console.log(geolocation);
        const url = `${APIURL}/data/2.5/weather?lat=${lat}&lon=${long}&units=${units}&appid=${APIKEY}`;
        const answerApi = await fetch(url);
        const resultApi = await answerApi.json();
        setDataWeather(resultApi);
        console.log(dataWeather);
        setGeolocation({
          ...geolocation,
          anwersGeolocation: false,
        });
        setAnswerApiWeather(true);
      }, 3000);
    };
    consultApiWeather();
  }, [anwersGeolocation]);

  return (
    <div className="App">
      <div className="App-weather">
        {!answerApiWeather ? (
          <Spinner animation="border" />
        ) : (
          <Weather
            country={sys.country}
            city={name}
            temp={main.temp}
            icon={weather[0].icon}
            weatherDescription={weather[0].description}
            weatherName={weather[0].main}
          />
        )}
      </div>
    </div>
  );
}
export default App;
