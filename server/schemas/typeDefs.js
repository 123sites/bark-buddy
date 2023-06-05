const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    dogs: [Dog]!
  }

  type Dog {
    _id: ID
    name: String
    breed: String
    age: String
    profile_pic: String
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
    addDog(name: String!, breed: String!, gender: String!, age: String!, profile_pic: String!): Dog
    removeDog(dogId:ID!): User
  }
`;

module.exports = typeDefs;
