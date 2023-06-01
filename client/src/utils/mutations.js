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
mutation AddDog($name: String!, $breed: String!, $age: Int!) {
    addDog(name: $name, breed: $breed, age: $age) {
      id
      name
      breed
      age
    }
  }
`;


