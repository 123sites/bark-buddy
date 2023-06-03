import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;


export const ADD_DOG = gql`
mutation addDog($dogData: DogData!) {
    addDog(dogData: $dogData) {
      _id
      username
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

export const REMOVE_DOG = gql`
mutation removeDog($dogId: String!) {
    removeDog(dogId: $dogId) {
      _id
      username
      dogs {
        _Id
        name
        breeds
        age
        gender
        photos
      }
    }
  }
`;

