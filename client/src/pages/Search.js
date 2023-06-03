import React from 'react';
import DogSearchFilter from '../components/DogSearchFilter';
import DogSearchList from '../components/DogSearchList';

const Search = () => {

  return (
    <div className="container">
      <DogSearchFilter />
      <DogSearchList />
    </div>
  );
};

export default Search;