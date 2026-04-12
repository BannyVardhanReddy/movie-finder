import { BrowserRouter,Routes,Route } from "react-router-dom";
import { useState } from "react";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import MovieDetailedPage from "./pages/MovieDetailedPage";
function App(){
  const [movies,setMovies] = useState([]);
  const [loading,setLoading] = useState(false);
  const [error,setError] = useState(null);

  async function handleSearch(query) {
    if(!query.trim()){
      return;
    }

    setLoading(true);
    setError(null);

    try{
       const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${import.meta.env.VITE_TMDB_API_KEY}&query=${query}`
        );

        const data = await res.json();
        // console.log(data);
        setMovies([...data.results]);
        // console.log(movies);

    }catch{
      setError("Something went wrong please search again");
    }finally{
      setLoading(false);
    }
  }

  return(
    <BrowserRouter>
      <NavBar handleSearch = {handleSearch}/>
      <Routes>
        <Route path = "/" element = {<HomePage movies = {movies} error = {error} loading = {loading}  />}></Route>
        <Route path = "/movie/:id" element = {<MovieDetailedPage />} />
      </Routes>
    </BrowserRouter>
  )
};

export default App;