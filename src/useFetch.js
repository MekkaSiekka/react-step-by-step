import { useState } from "react";
import { useEffect } from "react";


//want to stop fecthing if something is loading 
const useFetch = (url) => {

  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [name, setName] = useState('mario')
  const [error, setError] = useState(null);


  const FetchAndUpdateData = (url, abortCont) => {
    console.log('url is', url);
    fetch(url, { signal: abortCont.signal })
      .then(res => {
        //console.log(res)
        if (!res.ok) {
          throw Error('Could not fetch the data, data is null');
        }
        return res.json();
      })
      .then(data => {
        console.log(data);
        setData(data);
        setIsPending(false);
        setError(null);
      })
      .catch((err) => {
        //however, abortSignal will throw an error,
        //which will update the state here, not desirable
        console.log(err);
        console.log('error msg', err.message);
        if (err.name === 'AbortError') {
          console.log('fetch aborted')
        } else {
          setError(err.message);
          setIsPending(false);
        }
      });
  }


  //whenever url changes useEffect should reload
  useEffect(() => {
    const abortCont = new AbortController();

    //all function contents callback
    console.log("useEffect running");
    console.log("data", data);
    console.log("name", name);
    setTimeout(() => {
      FetchAndUpdateData(url,abortCont);
    }, 1000);
    return () => abortCont.abort();
  },
    [url]
  )

  return { data, isPending, error }
}

export default useFetch;