import React, { useState } from 'react';

function Buscador(props) {
    const [query, setQuery] = useState('');
  
    const handleChange = (event) => {
      setQuery(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      props.onSearch(query);
    };
  
    return (
    <div className='divbutton'>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          className="search-input"
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="Buscar en GardenEats "
        />
        <button className="search-button" type="submit">
          <i className="fas fa-search"></i>
        </button>
      </form>
      </div>
    );
  }
  
export default Buscador;
