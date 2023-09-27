import { fetchTrending } from 'API';
import MoviesList from 'components/MovieList/MoviesList';
import Loader from 'components/Loader/loader';
import { useEffect, useState } from 'react';

const Home = () => {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const TrendingFilms = () => {
      setLoading(true);
      fetchTrending()
        .then(trendingFilms => {
          setFilms(trendingFilms);
        })
        .catch(error => {
          console.log(error);
        })
        .finally(() => {
          setLoading(false);
        });
    };

    TrendingFilms();
  }, []);

  return (
    <main>
      <h1>Trending today </h1>
      <MoviesList films={films} />
      {loading && <Loader />}
    </main>
  );
};
export default Home;
