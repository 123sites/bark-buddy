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
  Col,
  Form,
  Button,
  Card,
  Row
} from 'react-bootstrap';

function DogSearchList() {

  const { loading, data } = useQuery(QUERY_DOGS);

  // for filters to try
  /*const { loading, data } = useQuery(QUERY_DOGS, {
    variables: {
      age: 'Adult', // Replace with the desired age description to filter by
    },
  });*/

  useEffect(() => {

  })

  const dogData = data || {};
  //console.log(dogData.dogs);

  return (
    <>
      <div>
        <select id="dropdown1">
          <option value="ageFilter">Choose Age</option>
          <option value="option1">Baby</option>
          <option value="option2">Young</option>
          <option value="option3">Adult</option>
        </select>

        <select id="dropdown2">
          <option value="genderFilter">Choose Gender</option>
          <option value="option1">Male</option>
          <option value="option2">Female</option>
        </select>

        <select id="dropdown3">
          <option value="breedFilter">Choose Breed</option>
          <option value="option1">Terrier</option>
          <option value="option2">Mixed Breed</option>
          <option value="option3">Golden Retriever</option>
          <option value="option4">German Shepherd</option>
          <option value="option5">Rottweiler</option>
          <option value="option6">Scottish Terrier</option>
          <option value="option7">Labrador Retriever</option>
          <option value="option8">Westie</option>
          <option value="option9">Hound</option>
          <option value="option10">Pit Bull Terrier</option>
          <option value="option11">Australian Shepherd</option>
          <option value="option12">Poodle</option>
          <option value="option13">Pomeranian</option>
          <option value="option14">Chihuahua</option>
          <option value="option15">Jack Russell Terrier</option>
          <option value="option16">Dachshund</option>
          <option value="option16">Tibetan Spaniel</option>
          <option value="option16">Pug</option>
          <option value="option16">Belgian Shepherd</option>
          <option value="option16">Australian Cattle Dog</option>
        </select>
      </div>


      <div>
      <Container>
          <h3 className='pt-4'>Bark buddies available to adopt:</h3>
        </Container>
      </div>

    
      <Container>
        <Row>
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
        </Row>
      </Container>

    </>
  )
};

export default DogSearchList;
