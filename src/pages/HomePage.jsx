import MovieCard from "../components/MovieCard";
function HomePage({movies,error,loading}){
    if(loading){
        return(
            <main className="page-shell">
                <section className="state-box">
                    <h2>Loading Movies</h2>
                    <p>Please wait while we fetch results.</p>
                </section>
            </main>
        )
    }

    if(error){
        return(
            <main className="page-shell">
                <section className="state-box">
                    <h2>Something Went Wrong</h2>
                    <p>Error fetching data. Please try again.</p>
                </section>
            </main>
        )
    }

    if(!movies || movies.length === 0){
        return(
            <main className="page-shell">
                <section className="state-box">
                    <h2>Start Your Search</h2>
                    <p>Type a movie name above to see results.</p>
                </section>
            </main>
        )
    }
    return(
        <main className="page-shell">
            <section className="results-head">
                <h2>Search Results</h2>
                <p>{movies.length} movies found</p>
            </section>
            <ul>
                {movies.map((movie) =>(
                    <MovieCard key = {movie.id} movie = {movie} />
                ))}
            </ul>
        </main>
    )
}

export default HomePage;