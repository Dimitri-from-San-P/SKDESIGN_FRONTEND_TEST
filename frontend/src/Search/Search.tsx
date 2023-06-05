import React, { useState } from 'react';
import './Search.css';

function Search({ searchFunction }: { searchFunction: any }): JSX.Element {
  const [searchInput, setSearchInput] = useState('');

  const inputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchInput(event.target.value);
  };

  return (
    <div className='mainContainerForSearch'>
    <div className="container">
      <input
        type="text"
        value={searchInput}
        onChange={inputChange}
        placeholder="Введите данные для поиска (Например имя или фамилию)"
        className="searchBtn"
      />
      <button type="button" className='buttonSearch' onClick={() => searchFunction(searchInput)}>
        Найти
      </button>
    </div>
    </div>
  );
}

export default Search;
