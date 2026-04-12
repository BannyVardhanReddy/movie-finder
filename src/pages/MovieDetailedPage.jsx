import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function MovieDetailedPage(){
    const [data,setData] = useState({});
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(null);

    const {id} = useParams();
    useEffect(()=>{
        setLoading(true);
        setError(null);
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${import.meta.env.VITE_TMDB_API_KEY}`)
        .then((data) => data.json())
        .then((response) => setData(response))
        .catch(()=>{
            setError("Error..")
        })
        .finally(()=>{
            setLoading(false);
        })
        // console.log(data);
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