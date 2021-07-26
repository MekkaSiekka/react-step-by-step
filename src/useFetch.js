import { useState } from "react";
import { useEffect} from "react";


const useFetch = (url)=>{

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [name, setName] = useState('mario')
    const [error, setError] = useState(null);


    const FetchAndUpdateData = (url) => {
        //fetch('http://localhost:8000/blogs22')
        fetch(url)
          .then(res => {
            //console.log(res)
            if (!res.ok){  
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
          .catch((err)=>{
            setError(err.message);
            setIsPending(false);
          });
      }

      
    //whenever url changes useEffect should reload
    useEffect(() => {
        //all function contents callback
        console.log("useEffect running");
        console.log(data);
        console.log(name);
        setTimeout(() => {
          FetchAndUpdateData();
        }, 1000); 
      },
        [url]
      )

    return {data, isPending, error}
}

export default useFetch;