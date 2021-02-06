import { useEffect, useRef, useState } from "react";

export const useFetch = (url) => {
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
