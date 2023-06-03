import React from 'react';
import { removeDogId } from '../utils/localStorage';
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
    const { loading, data } = useQuery(QUERY_ME);
    const [removeDog] = useMutation(REMOVE_DOG);
    const userData = data?.me || {};

    const handleRemoveDog = async (dogId) => {
        try {
            await removeDog({ variables: { dogId } });
            removeDogId(dogId);
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
                    <h1>Viewing favorite pooches</h1>
                </Container>
            </div>
            <Container>
                <h2 className='pt-5'>
                    {userData.savedDogs?.length
                    ? `Viewing ${userData.savedDogs.length} saved ${userData.savedDogs.length === 1 ? 'dog' : 'dogs'}:`
                    : 'No pooches saved to Favorites yet'}
                </h2>
                <Row>
                    {userData.savedDogs?.map((dog) => {
                        return (
                            <Col md="4">
                                <Card key={dog?.id}>
                                    {dog?.primary_photo_cropped?.large ? (
                                        <Card.Img src={dog?.primary_photo_cropped?.large} 
                                        alt='doggy' 
                                        variant='top' />
                                    ) : null}
                                    <Card.Body>
                                        <Card.Title>{dog?.name}</Card.Title>
                                        <Card.Text>Breed: {dog?.breeds?.primary}</Card.Text>
                                        <Card.Text>Age: {dog?.age}</Card.Text>
                                        <Card.Text>Gender: {dog?.gender}</Card.Text>
                                        <Button className='btn-danger' onClick={() => handleRemoveDog(dog?.id)}>
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