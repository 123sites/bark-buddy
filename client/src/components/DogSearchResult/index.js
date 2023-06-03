import React from "react";
import { Link } from "react-router-dom";
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';

function DogSearchResult({dog}) {

    return (
      <MDBRow className='row-cols-3 row-cols-md-3 g-4' >
      <MDBCol>
        <MDBCard className='h-100'>
          <MDBCardImage
          src={dog?.primary_photo_cropped?.medium}
          alt=''
          position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>{dog?.name}</MDBCardTitle>
            <MDBCardText>Breed: {dog?.breeds?.primary}</MDBCardText>
            <MDBCardText>Age: {dog?.age}</MDBCardText>
            <MDBCardText>Gender: {dog?.gender}</MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
    );
}

export default DogSearchResult;