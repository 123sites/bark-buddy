import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Auth from '../../utils/auth';
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';

import { saveDogIds, getSavedDogIds } from "../../utils/localStorage";
import { useMutation } from '@apollo/client';
import { ADD_DOG } from "../../utils/mutations";

function DogSearchResult({ dog }) {

  // create state for holding returned api data
  const [searchedDogs, setSearchedDogs] = useState([]);

  // create state for holding saved dogId values
  const [savedDogIds, setSavedDogIds] = useState(getSavedDogIds());
  const [saveDog] = useMutation(ADD_DOG);

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
    const breeds = event.target.getAttribute('data-breeds');
    const photos = event.target.getAttribute('data-photos');
    // find the dog in 'searchedDogs' state by the matching id
    //const dogToSave = searchedDogs.find((dog) => dog.id === dogId);

    // get token
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      //console.log(dogToSave);
     await saveDog({
       variables: {
        name:name,
        age:age,
        gender:gender,
        breeds:breeds,
        photos:photos
        }
     })

      // if dog successfully saved to user account, save dog id to state
      //setSavedDogIds([...saveDogIds, dogToSave.dogId]);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <MDBRow className='row-cols-4 row-cols-md-3 g-4' >
      <MDBCol>
        <MDBCard className='h-100'>
          <MDBCardImage
            src={dog?.primary_photo_cropped?.large}
            alt=''
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>{dog?.name}</MDBCardTitle>
            <MDBCardText>Breed: {dog?.breeds?.primary}</MDBCardText>
            <MDBCardText>Age: {dog?.age}</MDBCardText>
            <MDBCardText>Gender: {dog?.gender}</MDBCardText>
          </MDBCardBody>
          {Auth.loggedIn() && (
            <button
              disabled={savedDogIds?.some((savedDogId) => savedDogId === dog.id)}
              className='btn-info'
              data-name={dog?.name}
              data-breeds={dog?.breeds?.primary}
              data-gender={dog?.gender}
              data-age={dog?.age}
              data-photos={dog?.primary_photo_cropped?.large}
              onClick={(event) => handleSaveDog(event)}>
              {savedDogIds?.some((savedDogId) => savedDogId === dog.id)
                ? 'Pooch saved to Favorites already'
                : 'Save to Favorite Pooches'}
            </button>
          )}
          {Auth.loggedIn() && (
            <button className='btn-info'>Donate</button>
          )}

        </MDBCard>
      </MDBCol>
    </MDBRow>
  );
}

export default DogSearchResult;