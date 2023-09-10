import { Link } from 'react-router-dom';
export const MoviesList = ({ films }) => {
  return (
    <ul>
      {films.map(film => (
        <li key={film.id}>
          <Link to="/"> {film.title}</Link>
        </li>
      ))}
    </ul>
  );
};
