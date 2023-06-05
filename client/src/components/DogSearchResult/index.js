import React, { useState, useEffect } from "react";
//import { Link } from "react-router-dom";
import Auth from '../../utils/auth';

import {
  Container,
  Card,
  Button,
  Row,
  Col
} from 'react-bootstrap';

import { saveDogIds, getSavedDogIds } from "../../utils/localStorage";
import { useMutation } from '@apollo/client';
import { useQuery } from '@apollo/client';
import { ADD_DOG } from "../../utils/mutations";
import { QUERY_DOGS } from "../../utils/queries";

function DogSearchResult({ dog }) {
  // create state for holding returned api data
  //const [searchedDogs, setSearchedDogs] = useState([]);

  // create state for holding saved dogId values
  const [savedDogIds, setSavedDogIds] = useState(getSavedDogIds());//getSavedDogIds()
  const [saveDog] = useMutation(ADD_DOG);
  // const [dogQuery] = useQuery(QUERY_DOGS);

  // set up useEffect hook to save 'savedDogIds' list to localStorage on component unmount
  useEffect(() => {
    return () => saveDogIds(savedDogIds);
  });

  // create function to handle saving a dog to the database
  const handleSaveDog = async (event) => {
    console.log(event.target);

    const name = event.target.getAttribute('data-name');
    const age = event.target.getAttribute('data-age');
    const gender = event.target.getAttribute('data-gender');
    const breed = event.target.getAttribute('data-breed');
    const profile_pic = event.target.getAttribute('data-profile_pic');
    // find the dog in 'searchedDogs' state by the matching id
    //const dogId = event.target.getAttribute('data-id');

    // get token
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      //console.log(dogToSave);
      await saveDog({
        variables: {
          name: name,
          age: age,
          gender: gender,
          breed: breed,
          profile_pic: profile_pic
        }
      })

      // if dog successfully saved to user account, save dog id to state
      //console.log(dogId);
      //setSavedDogIds([dogId]);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Container>
        <Row>
          <Col md="4">
            <Card className='h-100' key={dog?.id}>
              <Card.Img src={dog?.profile_pic}
                alt='doggy'
                variant='top'
              />
              <Card.Body>
                <Card.Title>{dog?.name}</Card.Title>
                <Card.Text>Breed: {dog?.breed}</Card.Text>
                <Card.Text>Age: {dog?.age}</Card.Text>
                <Card.Text>Gender: {dog?.gender}</Card.Text>
              </Card.Body>

              {Auth.loggedIn() && (
                <Button
                  disabled={savedDogIds?.some((savedDogId) => savedDogId === dog.id)}
                  className='btn-info'
                  data-name={dog?.name}
                  data-breed={dog?.breed}
                  data-gender={dog?.gender}
                  data-age={dog?.age}
                  data-id={dog?.id}
                  data-profile_pic={dog?.profile_pic}
                  onClick={(event) => handleSaveDog(event)}>
                  {savedDogIds?.some((savedDogId) => savedDogId === dog.id)
                    ? 'Pooch saved to Favorites already'
                    : 'Save to Favorite Pooches'}
                </Button>
              )}
              {Auth.loggedIn() && (
                <Button className='btn-info'>Adopt</Button>
              )}

            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default DogSearchResult;