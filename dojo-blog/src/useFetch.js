import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      setTimeout(() => {
        fetch(url)
        .then((res) => {
          if (!res.ok) {
            throw Error('404 Error: Tangina boi, di nageexist yung data sa resource.');
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          setIsLoading(false);
          setError(null);
        })
        .catch((err) => {
          setError(err.message);
          setIsLoading(false);
        })
      }, 1000);
    }, []);   

    return {data, isLoading, error};
}
 
export default useFetch;