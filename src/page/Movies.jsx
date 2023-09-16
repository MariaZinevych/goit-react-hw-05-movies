import { fetchSearchByKeyword } from 'API';
import MoviesList from 'components/MoviesList';
import Loader from 'components/loader';
import { useState, useEffect } from 'react';
import Form from 'components/Form';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [searchFilms, setSearchFilms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [noMoviesText, setNoMoviesText] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('query') ?? '';
  const updateQueryString = query => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };

  useEffect(() => {
    const search = async () => {
      try {
        setLoading(true);
        const movies = await fetchSearchByKeyword(movieName);
        setSearchFilms(movies);
        setNoMoviesText(movies.length === 0);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    search();
  }, [movieName]);

  return (
    <main>
      <Form value={movieName} onChange={updateQueryString} />
      {loading && <Loader />}
      {noMoviesText && (
        <p>There is no movies with this request. Please, try again</p>
      )}
      {searchFilms && <MoviesList films={searchFilms} />}
    </main>
  );
};
export default Movies;
