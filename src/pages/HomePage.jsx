import MovieCard from "../components/MovieCard";
function HomePage({movies,error,loading}){
    if(loading){
        return(
            <h1>Loading....</h1>
        )
    }

    if(error){
        return(
            <h1>Error Fetching the data..Try after some time..</h1>
        )
    }

    if(!movies){
        <h1>No matches found!</h1>
    }
    return(
        <div>

            <ul>
                {movies.map((movie) =>(
                    <MovieCard key = {movie.id} movie = {movie} />
                ))}
            </ul>
        </div>
    )
}

export default HomePage;