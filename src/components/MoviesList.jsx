import { Link } from 'react-router-dom';
const MoviesList = ({ films }) => {
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
export default MoviesList;
