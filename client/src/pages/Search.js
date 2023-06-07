import React from 'react';
import DogSearchFilter from '../components/DogSearchFilter';
import DogSearchList from '../components/DogSearchList';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';

const Search = () => {
  const { loading, data, refetch } = useQuery(QUERY_ME);
  const userData = data?.me || null;

  return (
    <div>
      <DogSearchFilter />
      <DogSearchList userData={userData} refetchUser={refetch} />
    </div>
  );
};

export default Search;