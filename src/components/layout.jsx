import { Suspense } from 'react';
import { Outlet, Link } from 'react-router-dom';
import Loader from 'components/loader';

export const Layout = () => {
  return (
    <div>
      <header>
        <ul>
          <li>
            <Link to="/" end>
              Home
            </Link>
          </li>
          <li>
            <Link to="/movies"> Movies </Link>
          </li>
        </ul>
      </header>

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};
