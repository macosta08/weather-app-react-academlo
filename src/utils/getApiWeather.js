import { APIURL, APIKEY } from "./apiWeatherConfigFile";
import axios from "axios";

export const getApiWeather = async ({
  lat,
  long,
  units = "metric",
  setDataWeather,
  setAnswerApiWeather,
}) => {
  try {
    const url = `${APIURL}/data/2.5/weather?lat=${lat}&lon=${long}&units=${units}&appid=${APIKEY}`;
    const res = await axios.get(url);

    setDataWeather(res.data);
    setAnswerApiWeather(true);
  } catch {
    console.error("error");
  }
};
