import { Suspense } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import Loader from 'components/loader';

export const Layout = () => {
  return (
    <div>
      <header>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/movies"> Movies </NavLink>
          </li>
        </ul>
      </header>

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};
