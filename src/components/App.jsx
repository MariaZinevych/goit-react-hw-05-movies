import { Home } from 'page/Home';
import { Movies } from 'page/Movies';
import { MoviesDetalies } from 'page/moviesDatalies';
import { Routes, Route, NavLink } from 'react-router-dom';
export const App = () => {
  return (
    <>
      <ul>
        <li>
          <NavLink to="/home"> Home </NavLink>{' '}
        </li>
        <li>
          <NavLink to="/movies"> Movies </NavLink>{' '}
        </li>
      </ul>

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:detalies" element={<MoviesDetalies />} />
      </Routes>
    </>
  );
};
