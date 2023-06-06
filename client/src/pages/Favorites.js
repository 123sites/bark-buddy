import React, { useState, useEffect } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';
import { REMOVE_DOG } from '../utils/mutations';
import {
    Container,
    Card,
    Button,
    Row,
    Col
} from 'react-bootstrap';

const Favorites = () => {
    const { loading, data, refetch } = useQuery(QUERY_ME);
    const [removeDog] = useMutation(REMOVE_DOG);
    const userData = data?.me || {};

    //console.log("data: ", data);

    useEffect(() => {
        refetch();
    }, []);

    const handleRemoveDog = async (event) => {
        const dogId = event.target.getAttribute('data-id');

        try {
            await removeDog({ variables: { dogId: dogId } });
            refetch(); 
        } catch (err) {
            console.log(err);
        }
    };

    if (loading) {
        return <h2>Loading...</h2>;
    }

    return (
        <>
            <div>
                <Container>
                    <h1>Your favorite pooches</h1>
                </Container>
            </div>
            <Container>
                <h2 className='pt-5'>
                    {userData.dogs?.length
                        ? `Viewing ${userData.dogs.length} saved ${userData.dogs.length === 1 ? 'dog' : 'dogs'}:`
                        : 'No pooches saved to Favorites yet'}
                </h2>
                <Row>
                    {userData?.dogs.map((dog) => {
                        return (
                            <Col md="4">
                                <Card key={dog?._id} className='h-100'>
                                    {dog?.profile_pic ? (
                                        <Card.Img src={dog?.profile_pic}
                                            alt='doggy'
                                            variant='top' />
                                    ) : null}
                                    <Card.Body>
                                        <Card.Title>{dog?.name}</Card.Title>
                                        <Card.Text>Breed: {dog?.breed}</Card.Text>
                                        <Card.Text>Age: {dog?.age}</Card.Text>
                                        <Card.Text>Gender: {dog?.gender}</Card.Text>
                                        <Button className='btn-danger'
                                            data-id={dog?._id}
                                            onClick={(event) => handleRemoveDog(event)}>
                                            Remove pooch from Favorites
                                        </Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        );
                    })}
                </Row>
            </Container>
        </>
    );
}

export default Favorites;