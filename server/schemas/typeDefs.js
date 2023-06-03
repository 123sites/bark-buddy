const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    savedDogs: [Dog]!
  }

  type Dog {
    _id: ID
    name: String
    breeds: String
    age: Int
    photos: String
    gender: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
  me: User
  users: [User]
  user(username: String!): User
  dogs: [Dog]
  dog(dogId: ID!): Dog
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addDog(name: String!, breeds: String!, gender: String!): Dog
    removeDog(dogId:ID!): Dog
  }
`;

module.exports = typeDefs;
