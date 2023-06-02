const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    savedDogs: [Dog]!


  }

  type Dog{
    dogId: String!
    name: String
    breed: [String]!
    age: Int
    img: String
  }

  input DogData{
    dogId: String!
    name: String
    breed: [String]!
    age: Int
    img: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
  me: User

  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addDog(dogData: DogData!): User
    removeDog(dogId:String!): User



  }
`;

module.exports = typeDefs;
