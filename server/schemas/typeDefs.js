const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    dogs: [Dog]!
  }











  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    dogs(username: String): [Dog]
    dog(dogId: ID!): Dog
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addDog(dogText: String!): Dog
    removeDog(dogId: ID!): Dog
  }
`;

module.exports = typeDefs;
