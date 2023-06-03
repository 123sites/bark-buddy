import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_DOG } from '../../utils/mutations';
import Auth from '../../utils/auth';
import DogSearchResult from '../DogSearchResult';
import { QUERY_DOGS } from '../../utils/queries';

function DogSearchList() {

  const [jsonData, setJsonData] = useState(null);

  useEffect(() => {
    // Fetch the JSON data
    fetch('./data.json')
      .then(response => response.json())
      .then(data => setJsonData(data))
      .catch(error => console.error(error));
  }, []);


  const { loading, data } = useQuery(QUERY_DOGS);

  const dog = {jsonData};

  return (
    <div className="my-2">
      <h2>Bark buddies available to adopt:</h2>
      <div>
        {jsonData && (
          <ul>
            {jsonData.map(item => (
              <DogSearchResult key={item.id} dog={item}>
                
              </DogSearchResult>
            ))}
          </ul>
        )}
        <DogSearchResult
            dog={jsonData}
          />
      </div>
    </div>
  )
};

export default DogSearchList;
