import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();

    setTimeout(() => {
      fetch(url, { signal: abortController.signal })
        .then((res) => {
          if (!res.ok) {
            throw Error(
              "404 Error: Tangina boi, di nageexist yung data sa resource."
            );
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          setIsLoading(false);
          setError(null);
        })
        .catch((err) => {
          if (err.name === "AbortError") {
            console.log("Fetch Aborted");
          } else {
            setError(err.message);
            setIsLoading(false);
          }
        });
    }, 1000);
    return () => abortController.abort();
  }, [url]);

  return { data, isLoading, error };
};

export default useFetch;
