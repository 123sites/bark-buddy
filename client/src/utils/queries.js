import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      dogs {
        _id
        name
        breeds
        age
        gender
        photos
      }
    }
  }
`;

// This should allow a user/users to view dogs they have saved
export const QUERY_ME = gql`
 {
  me {
    _id
    username
    email
    dogs {
      _id
      name
      breeds
      age
      gender
      photos
    }
  }
}
`;

// Search for dogs 
export const QUERY_DOGS = gql`
{
  dogs {
    _id
    name
    breeds
    age
    gender
    photos
  }
}
`;

export const QUERY_SINGLE_DOG = gql`
  query getSingleDog($dogId: ID!) {
    dog(dogId: $dogId) {
      _id
      name
      breeds
      age
      gender
      photos
    }
  }
`;




