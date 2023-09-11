import { useState } from 'react';
import { But, FormList, Input } from './Form.styled';

const Form = ({ searchMovies }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = event => {
    setQuery(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    searchMovies(query.toLowerCase());
  };

  return (
    <FormList onSubmit={handleSubmit}>
      <Input
        type="text"
        name="query"
        autoFocus
        value={query}
        onChange={handleInputChange}
      />
      <But type="submit">Search</But>
    </FormList>
  );
};
export default Form;
