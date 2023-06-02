//import React from "react";
//import DogSearchList from "../components/DogSearchList";
//need a search bar and form
//import CategoryMenu from "../components/CategoryMenu";

/*const Search = () => {
  return (
    <div className="container">
      <DogSearchList />
    </div>
  );
};

export default Search;*/


import React, { useState, useEffect } from 'react';
import {
  Container,
  Col,
  Form,
  Button,
  Card,
  Row
} from 'react-bootstrap';

import Auth from '../utils/auth';
import apiData from '../utils/apiData';
import { saveDogIds, getSavedDogIds } from '../utils/localStorage';
import { useMutation } from '@apollo/client';
import { ADD_DOG } from '../utils/mutations';

const Search = () => {
  // create state for holding returned api data
  const [searchedDogs, setSearchedDogs] = useState([]);
  // create state for holding our search field data
  const [searchInput, setSearchInput] = useState('');

  // create state to hold saved dogId values
  const [savedDogIds, setSavedDogIds] = useState(getSavedDogIds());
  const [saveDog] = useMutation(ADD_DOG);

  // set up useEffect hook to save `savedDogIds` list to localStorage on component unmount
  // learn more here: https://reactjs.org/docs/hooks-effect.html#effects-with-cleanup
  useEffect(() => {
    return () => saveDogIds(savedDogIds);
  });

  // create method to search for dogs and set state on form submit
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!searchInput) {
      return false;
    }

    try {
      const response = await apiData(searchInput);

      if (!response.ok) {
        throw new Error('something went wrong!');
      }

      const { items } = await response.json();

      const dogData = items.map((dog) => ({
        dogId: dog.id,
        name: dog.name,
        breed: dog.breed,
        age: dog.age,
        img: dog.image || '',
      }));

      setSearchedDogs(dogData);
      setSearchInput('');
    } catch (err) {
      console.error(err);
    }
  };

  // create function to handle saving a dog to our database
  const handleAddDog = async (dogId) => {
    // find the dog in `searchedDogs` state by the matching id
    const dogToSave = searchedDogs.find((dog) => dog.dogId === dogId);

    // get token
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      //const response = await saveDog(dogToSave, token);
      await saveDog({
        variables: { dogData: { ...dogToSave } }
      })

      // if dog successfully saves to user's account, save dog id to state
      setSavedDogIds([...savedDogIds, dogToSave.dogId]);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <div className="text-light bg-dark p-5">
        <Container>
          <h1>Pick a Pooch</h1>
          <Form onSubmit={handleFormSubmit}>
            <Row>
              <Col xs={12} md={8}>
                <Form.Control
                  name='searchInput'
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  type='text'
                  size='lg'
                  placeholder='Search for a pup'
                />
              </Col>
              <Col xs={12} md={4}>
                <Button type='submit' variant='success' size='lg'>
                  Submit Search
                </Button>
              </Col>
            </Row>
          </Form>
        </Container>
      </div>

      <Container>
        <h2 className='pt-5'>
          {searchedDogs.length
            ? `Viewing ${searchedDogs.length} results:`
            : 'Search for a pup to begin'}
        </h2>
        <Row>
          {searchedDogs.map((dog) => {
            return (
              <Col md="4">
                <Card key={dog.dogId} border='dark'>
                  {dog.image ? (
                    <Card.Img src={dog.image} alt={`The cover for ${dog.name}`} variant='top' />
                  ) : null}
                  <Card.Body>
                    <Card.Title>{dog.name}</Card.Title>
                    <p className='small'>Breed: {dog.breed}</p>
                    <Card.Text>{dog.age}</Card.Text>
                    {Auth.loggedIn() && (
                      <Button
                        disabled={savedDogIds?.some((savedDogId) => savedDogId === dog.dogId)}
                        className='btn-block btn-info'
                        onClick={() => handleAddDog(dog.dogId)}>
                        {savedDogIds?.some((savedDogId) => savedDogId === dog.dogId)
                          ? 'This pup has already been saved!'
                          : 'Save this Pup!'}
                      </Button>
                    )}
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default Search;