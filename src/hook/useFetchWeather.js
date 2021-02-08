import { useEffect, useState } from "react";

const APIURL = "https://api.openweathermap.org";
const APIKEY = "13c36e252ca697f7355f5bc8ac79b77a";
export const useFetchWeather = (lat, long, units = "metric") => {
  const url = `${APIURL}/data/2.5/weather?lat=${lat}&lon=${long}&units=${units}&appid=${APIKEY}`;

  const [state, setstate] = useState({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    setstate({ data: null, loading: true, error: null });

    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        setstate({
          error: null,
          loading: false,
          data,
        });
      });
  }, [url]);

  return state;
};
