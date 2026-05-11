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
    return (
      <main className="page-shell">
        <section className="state-box">
          <h2>Loading Movie Details</h2>
        </section>
      </main>
    );
  }

  if (error) {
    return (
      <main className="page-shell">
        <section className="state-box">
          <h2>Failed To Load Movie</h2>
        </section>
      </main>
    );
  }
  if (!data) {
    return null;
  }
  return (
    <main className="page-shell">
      <article className="movie-detail-card">
        <img
          src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
          alt={data.title}
        />
        <div className="movie-detail-content">
          <h2>{data.title}</h2>
          <p className="tagline">{data.tagline}</p>
          <p>{data.overview}</p>
          <p><strong>Rating:</strong> {data.vote_average}</p>
          <p><strong>Runtime:</strong> {data.runtime} mins</p>
          <p><strong>Release Date:</strong> {data.release_date}</p>
          <p><strong>Genres:</strong> {data.genres.map((g) => g.name).join(", ")}</p>
        </div>
      </article>
    </main>
  );
}

export default MovieDetailedPage;
