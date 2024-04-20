import { useState } from 'react';
export const Searchbar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');
  const onChange = event => {
    setQuery(event.target.value);
  };
  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(query);
  };
  return (
    <header>
      <form onSubmit={handleSubmit}>
        <button type="submit">
          <span>Search</span>
        </button>
        <input
          name="searched"
          value={query}
          onChange={onChange}
          type="text"
          autocomplete="off"
          autofocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};
