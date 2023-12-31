import { lazy } from 'react';

import { Layout } from 'components/Layout/layout';
import { Routes, Route } from 'react-router-dom';

const Cast = lazy(() => import('components/Cast/Cast'));
const Home = lazy(() => import('page/Home'));
const Movies = lazy(() => import('page/Movies'));
const MoviesDetalies = lazy(() => import('page/moviesDatalies'));
const Reviews = lazy(() => import('components/Reviews/Reviews'));

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MoviesDetalies />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="*" element={<Home />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;
