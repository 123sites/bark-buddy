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

function DogSearchList({ userData, refetchUser }) {

  const { loading, data } = useQuery(QUERY_DOGS);

  let [dogData, setDogData] = useState(data);
  useEffect(() => {
    setDogData(data);
  }, [data]);

  //let dogData = data || {};

  //console.log(dogData.dogs);
  const breeds = [...new Map(dogData?.dogs?.map((dog) => [dog.breed, dog])).values()];
  //console.log(breeds);

  const ages = [...new Map(dogData?.dogs?.map((dog) => [dog.age, dog])).values()];
  //console.log(ages);

  const genders = [...new Map(dogData?.dogs?.map((dog) => [dog.gender, dog])).values()];
 //console.log(genders);

  const handleInputBreed = (event) => {
    console.log(event.target.value);
    const targettedAttribute = event.target.value;
    const newDogArray = dogData?.dogs?.filter((dog) => { return targettedAttribute === dog.breed });
    setDogData({dogs: newDogArray});
    console.log(dogData.dogs);
  }

  const handleInputAge = (event) => {
    console.log(event.target.value);
    const targettedAttribute = event.target.value;
    const newDogArray = dogData?.dogs?.filter((dog) => { return targettedAttribute === dog.age });
    setDogData({dogs: newDogArray});
    console.log(dogData);
  }

  const handleInputGender = (event) => {
    console.log(event.target.value);
    const targettedAttribute = event.target.value;
    const newDogArray = dogData?.dogs?.filter((dog) => { return targettedAttribute === dog.gender });
    setDogData({dogs: newDogArray});
    console.log(dogData);
  }

  return (
    <>
    <Row>
      <Col md={3}>
        <div>

          <br></br>
          <select
            onChange={handleInputBreed}
            id="breedFilter">
            <option>Choose breed</option>
            {breeds?.map((dog) => {
              return (
                <option value={dog.breed}>
                  {dog.breed}
                </option>
              )
            })}
          </select>

          <br></br>

          <select
            onChange={handleInputAge}
            id="ageFilter">
            <option>Choose age</option>
            {ages?.map((dog) => {
              return (
                <option value={dog.age}>
                  {dog.age}
                </option>
              )
            })}
          </select>

          <br></br>

          <select
            onChange={handleInputGender}
            id="genderFilter">
            <option>Choose gender</option>
            {genders?.map((dog) => {
              return (
                <option value={dog.gender}>
                  {dog.gender}
                </option>
              )
            })}
          </select>

        </div>

        <div>
          <button>Clear all filters</button>
        </div>
      </Col>

      <Col md={9}>
        <div>
          <Container>
            <h3 className='pt-4'>Bark buddies available to adopt:</h3>
          </Container>
        </div>

        <Container>
          <Row>
            {dogData && dogData?.dogs?.map((item) => (
              <Col key={item.id} md="4">
                    <DogSearchResult dog={item} userData={userData} refetchUser={refetchUser} />
                  </Col>
            ))}
          </Row>
        </Container>
      </Col>
</Row>
    </>
  )
};

export default DogSearchList;
/*
      <Container>
        <Row>
          {dogData && (
            <Col>
              <div>
                {dogData?.dogs?.map(item => (
                  <DogSearchResult key={item.id} dog={item} userData={userData} refetchUser={refetchUser}>
                  </DogSearchResult>
                ))}
              </div>
            </Col>
          )}
        </Row>
      </Container>
*/