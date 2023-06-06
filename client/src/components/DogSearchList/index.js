import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_DOG } from '../../utils/mutations';
import Auth from '../../utils/auth';
import DogSearchResult from '../DogSearchResult';
import { QUERY_DOGS } from '../../utils/queries';
import {
  Container,
  Card,
  Button,
  Row,
  Col
} from 'react-bootstrap';

function DogSearchList() {

  const { loading, data } = useQuery(QUERY_DOGS);

  /*const { loading, data } = useQuery(QUERY_DOGS, {
    variables: {
      age: 'Adult', // Replace with the desired age description to filter by
    },
  });*/

  useEffect(() => {

  })

  const dogData = data || {};

  return (
    <>

      <div>
        <select id="dropdown1">
          <option value="noFilter">Choose Age</option>
          <option value="option1">Baby</option>
          <option value="option2">Young</option>
          <option value="option3">Adult</option>
        </select>

        <select id="dropdown2">
          <option value="">Choose Gender</option>
          <option value="option1">Male</option>
          <option value="option2">Female</option>
        </select>

        <select id="dropdown3">
          <option value="">Choose Breed</option>
          <option value="option1">Terrier</option>
          <option value="option2">Mixed Bred</option>
          <option value="option3">Golden Retriever</option>
        </select>
      </div>

      <div>
        <Container>
          <h2>Bark buddies available to adopt:</h2>
          <p></p>
        </Container>
      </div>


      <Container>

          {dogData && (
            <Col>
              <div className='h-100'>
                {dogData?.dogs?.map(item => (

                  <DogSearchResult key={item.id} dog={item}>
                  </DogSearchResult>

                ))}
              </div>
            </Col>
          )}

      </Container>

    </>
  )
};

export default DogSearchList;
