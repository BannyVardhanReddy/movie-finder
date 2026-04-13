import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function MovieDetailedPage() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { id } = useParams();
  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        setError(null);
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${import.meta.env.VITE_TMDB_API_KEY}`,
        );
        const data = await res.json();

        setData(data);
      } catch {
        setError("Error..");
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [id]);
  console.log(data);
  if (loading) {
    return <h1>loading...</h1>;
  }

  if (error) {
    return <h1>Error..</h1>;
  }
  if (!data) {
    return null;
  }
  return (
    <div>
      <img
        src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
        alt={data.title}
      />
      <h1>{data.title}</h1>
      <p>{data.tagline}</p>
      <p>{data.overview}</p>
      <p>Rating: {data.vote_average}</p>
      <p>Runtime: {data.runtime} mins</p>
      <p>Release date: {data.release_date}</p>
      <p>Genres: {data.genres.map((g) => g.name).join(", ")}</p>
    </div>
  );
}

export default MovieDetailedPage;
