import React from "react";
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

function DogSearchResult({ dog }) {

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
            <button className='btn-info'>Save</button>
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