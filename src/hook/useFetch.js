import { useEffect, useRef, useState } from "react";

const APIURL = "http://api.openweathermap.org";
const APIKEY = "13c36e252ca697f7355f5bc8ac79b77a";
export const useFetch = (lat, long, units = "metric") => {
  const url = `${APIURL}/data/2.5/weather?lat=${lat}&lon=${long}&units=${units}&appid=${APIKEY}`;

  const isMounted = useRef(true);

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

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
        //condicional if para prevenir Warning: Can't perform a React state update on an unmounted component
        if (isMounted.current) {
          setstate({
            error: null,
            loading: false,
            data,
          });
        }
      });
  }, [url]);

  return state;
};
