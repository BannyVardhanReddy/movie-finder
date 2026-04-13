import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function MovieDetailedPage(){
    const [data,setData] = useState({});
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(null);

    const {id} = useParams();
    useEffect(()=>{
        async function fetchData() {
            try{
                setLoading(true);
            setError(null);
            const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${import.meta.env.VITE_TMDB_API_KEY}`);
            const data = await res.json();

            setData(data);
            }catch{
              setError("Error..")
            }finally{
              setLoading(false);
            }
        }

        fetchData();
    },[id])
    console.log(data);
    if(loading){
        return(
            <h1>loading...</h1>
        )
    }

    if(error){
        return(
            <h1>Error..</h1>
        )
    }
    return(
        <>
            <h1>Movie details</h1>
        </>
    )
}

export default MovieDetailedPage;