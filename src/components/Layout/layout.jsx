import { Suspense } from 'react';
import { Outlet, Link } from 'react-router-dom';
import Loader from 'components/Loader/loader';
import { Container, Header } from './layout.styled.';

export const Layout = () => {
  return (
    <Container>
      <Header>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/movies"> Movies </Link>
          </li>
        </ul>
      </Header>

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
