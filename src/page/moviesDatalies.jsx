import { fetchMovieDetails } from 'API';
import { But } from 'components/Form/Form.styled';
import Loader from 'components/Loader/loader';
import { useRef } from 'react';
import { useEffect, useState } from 'react';
import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import { Container } from './moviesDatalies.staled';

const MoviesDetalies = () => {
  const { movieId } = useParams();
  const [movieInfo, setMovieInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const linkbank = useRef(location.state?.from ?? '/movies');

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
    <Container>
      <Link to={linkbank.current}>
        <But type="button">Go back</But>
      </Link>
      {loading && <Loader />}
      {movieInfo && (
        <div>
          <img
            width="400px"
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w500${poster_path}`
                : `https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg`
            }
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

            <ul>
              {genres.map(genre => (
                <li key={genre.id}>{genre.name}</li>
              ))}
            </ul>
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
        </ul>
        <ul>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>

        <hr />
        <Outlet />
      </div>
    </Container>
  );
};

export default MoviesDetalies;
