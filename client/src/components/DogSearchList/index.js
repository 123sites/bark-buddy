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
  Button,
  Row
} from 'react-bootstrap';

function DogSearchList({ userData, refetchUser }) {

  const { loading, data } = useQuery(QUERY_DOGS);
  const [dogData, setDogData] = useState(data);
  const [filteredDogData, setFilteredDogData] = useState(data?.dogs || []);
  const [selectedBreed, setSelectedBreed] = useState('');
  const [selectedAge, setSelectedAge] = useState('');
  const [selectedGender, setSelectedGender] = useState('');

  useEffect(() => {
    setDogData(data);
    setFilteredDogData(data?.dogs || []);
  }, [data]);

  useEffect(() => {
    const newDogArray = dogData?.dogs?.filter((dog) => {
      return (
        (selectedBreed === '' || selectedBreed === dog.breed) &&
        (selectedAge === '' || selectedAge === dog.age) &&
        (selectedGender === '' || selectedGender === dog.gender)
      );
    });
    setFilteredDogData(newDogArray);
  }, [selectedBreed, selectedAge, selectedGender])

  const handleClearFilters = () => {
    setSelectedBreed('');
    setSelectedAge('');
    setSelectedGender('');
    setFilteredDogData(dogData?.dogs || []);
  };

  const handleInputBreed = (event) => {
    const targettedAttribute = event.target.value;
    setSelectedBreed(targettedAttribute);
  };

  const handleInputAge = (event) => {
    const targettedAttribute = event.target.value;
    setSelectedAge(targettedAttribute);
  };

  const handleInputGender = (event) => {
    const targettedAttribute = event.target.value;
    setSelectedGender(targettedAttribute);
  };


  const breeds = [...new Map(filteredDogData?.map((dog) => [dog.breed, dog])).values()];

  const ages = [...new Map(filteredDogData?.map((dog) => [dog.age, dog])).values()];

  const genders = [...new Map(filteredDogData?.map((dog) => [dog.gender, dog])).values()];

  return (
    <>
      <Row>
        <Col md={2}>
          <div>

            <div>
              <Container>
                <h3 className='pt-4'>Filters</h3>
              </Container>
            </div>
            <br />

            <select
              onChange={handleInputBreed}
              id="breedFilter"
              value={selectedBreed}>
              <option value="">Choose breed</option>
              {breeds?.map((dog) => {
                if (
                  (selectedAge === '' || selectedAge === dog.age) &&
                  (selectedGender === '' || selectedGender === dog.gender)
                ) {
                  return (
                    <option key={dog.breed} value={dog.breed}>
                      {dog.breed}
                    </option>
                  );
                } else {
                  return null;
                }
              })}
            </select>
            <br />

            <select
              onChange={handleInputAge}
              id="ageFilter"
              value={selectedAge}>
              <option value="">Choose age</option>
              {ages?.map((dog) => (
                <option key={dog.age} value={dog.age}>
                  {dog.age}
                </option>
              ))}
            </select>
            <br />

            <select
              onChange={handleInputGender}
              id="genderFilter"
              value={selectedGender}>
              <option value="">Choose gender</option>
              {genders?.map((dog) => (
                <option key={dog.gender} value={dog.gender}>
                  {dog.gender}
                </option>
              ))}
            </select>
            <br />

            <Button variant="secondary"
              onClick={handleClearFilters}>Clear all filters</Button>

          </div>
        </Col>

        <Col md={10}>
          <div>
            <Container>
              <h3 className='pt-4'>Bark buddies available to adopt:</h3>
              <br />
            </Container>
          </div>

          <Container>
            <Row>
              {filteredDogData?.map((item) => (
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
