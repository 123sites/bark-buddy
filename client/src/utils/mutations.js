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


/*export const ADD_DOG = gql`
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
`;*/

export const ADD_DOG = gql`
mutation addDog($name: String!, $breed: String!, $gender: String!, $age: String!, $profile_pic: String!) {
  addDog(name: $name, breed: $breed, gender: $gender, age: $age, profile_pic: $profile_pic) {
    _id
    age
    breed
    gender
    name
    profile_pic
  }
}
`;
/*
export const REMOVE_DOG = gql`
mutation removeDog($dogId: ID!) {
    removeDog(dogId: $dogId) {
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
`;*/


export const REMOVE_DOG = gql`
mutation removeDog($dogId: ID!) {
  removeDog(dogId: $dogId) {
    username
    dogs {
      _id
    }
  }
}
`;