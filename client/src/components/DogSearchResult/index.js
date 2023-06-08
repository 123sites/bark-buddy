import React, { useState } from "react";
//import { Link } from "react-router-dom";
import Auth from '../../utils/auth';

import {
  Container,
  Card,
  Button,
  Row,
  Col,
  Modal,
  Form
} from 'react-bootstrap';

import { useMutation } from '@apollo/client';
import { useQuery } from '@apollo/client';
import { ADD_DOG } from "../../utils/mutations";
import { QUERY_DOGS } from "../../utils/queries";

function DogSearchResult({ dog, userData, refetchUser }) {

  const [saveDog] = useMutation(ADD_DOG);

  // create function to handle saving a dog to the database
  const handleSaveDog = async (event) => {
    console.log(event.target);

    const name = event.target.getAttribute('data-name');
    const age = event.target.getAttribute('data-age');
    const gender = event.target.getAttribute('data-gender');
    const breed = event.target.getAttribute('data-breed');
    const profile_pic = event.target.getAttribute('data-profile_pic');

    // get token
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      await saveDog({
        variables: {
          name: name,
          age: age,
          gender: gender,
          breed: breed,
          profile_pic: profile_pic
        }
      })

      refetchUser();

    } catch (err) {
      console.log(err);
    }
  };

  const [showModal, setShowModal] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleModal = () => {
    setShowModal(!showModal);
    setSubmitted(false);
  };

  const handleSubmit = () => {
    handleModal();
    setSubmitted(true);
  };

  //console.log("userData: ", userData);
  //console.log("dog._id: ", dog._id);
  return (
    <>

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
            disabled={userData?.dogs?.some((savedDog) => savedDog._id === dog._id)}
            className='btn-info'
            data-name={dog?.name}
            data-breed={dog?.breed}
            data-gender={dog?.gender}
            data-age={dog?.age}
            data-id={dog?._id}
            data-profile_pic={dog?.profile_pic}
            onClick={(event) => handleSaveDog(event)}>
            {userData?.dogs.some((savedDog) => savedDog._id === dog._id)
              ? 'Pooch saved to Favorites already'
              : 'Save to Favorite Pooches'}
          </Button>
        )}

        {Auth.loggedIn() && (
          <Button className='btn-info'
            onClick={handleModal} variant="primary" block>Adopt</Button>
        )}
        <Modal show={showModal} onHide={handleModal}>
          <Modal.Header closeButton>
            <Modal.Title>Adoption Form</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your full name" />
              </Form.Group>
              <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="text" placeholder="Enter your email address" />
              </Form.Group>
              <Form.Group controlId="formPhone">
                <Form.Label>Phone</Form.Label>
                <Form.Control type="text" placeholder="What is the best phone number to reach you?" />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleModal}>
              Close
            </Button>
            <Button variant="primary" onClick={handleSubmit}>
              Submit
            </Button>
          </Modal.Footer>
        </Modal>

        <Modal show={submitted} onHide={() => setSubmitted(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Thank You!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Thank you for filling out the form. A rescue team member will reach out to you shortly!</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setSubmitted(false)}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Card>
    </>
  );
}

export default DogSearchResult;