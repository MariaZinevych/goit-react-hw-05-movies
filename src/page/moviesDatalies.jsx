import { fetchMovieDetails } from 'API';
import Loader from 'components/loader';
import { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';

const MoviesDetalies = () => {
  const { movieId } = useParams();
  const [movieInfo, setMovieInfo] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const MoviesDetaliesfilms = () => {
      setLoading(true);
      fetchMovieDetails(movieId)
        .then(detalies => {
          setMovieInfo(detalies);
        })
        .catch(error => {
          console.log(error);
        })
        .finally(() => {
          setLoading(false);
        });
    };
    MoviesDetaliesfilms();
  }, [movieId]);

  if (!movieInfo) {
    return;
  }

  const {
    title,
    release_date,
    popularity,
    overview,
    genres,
    poster_path,
    original_title,
  } = movieInfo || {};

  return (
    <>
      <Link to="/">
        <button type="button">Go back</button>
      </Link>
      {loading && <Loader />}
      {movieInfo && (
        <div>
          <img
            width="300px"
            src={poster_path && `https://image.tmdb.org/t/p/w500${poster_path}`}
            alt={original_title}
          />
          <div>
            <h1>
              {title} ({release_date.slice(0, 4)})
            </h1>
            <p>User score: {popularity}</p>
            <h2>Overview</h2>
            <p>{overview}</p>
            <h2>Genres</h2>
            <li>
              {genres.map(genre => (
                <li key={genre.id}>{genre.name}</li>
              ))}
            </li>
          </div>
        </div>
      )}
      <hr />
      <div>
        <h3>Additional information</h3>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
        <hr />
        <Outlet />
      </div>
    </>
  );
};

export default MoviesDetalies;
