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
        breed
        age
        gender
        profile_pic
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
      breed
      age
      gender
      profile_pic
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
    breed
    age
    gender
    profile_pic
  }
}
`;

export const QUERY_SINGLE_DOG = gql`
  query getSingleDog($dogId: ID!) {
    dog(dogId: $dogId) {
      _id
      name
      breed
      age
      gender
      profile_pic
    }
  }
`;





