const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    firstName: String
    lastName: String
    email: String
    password: String
    userType: String
  }

  type Parent {
    _id: ID!
    user: User
    zone: String
    howMany: String
    age: String
    activities: String
    allergies: String
    pets: Boolean
    screenTime: Boolean
    smoker: Boolean
    requests: String
  }
  
  type Babysitter {
    _id: ID!
    user: User
    zone: String
    jobExp: String
    otherExp: String
    shortNotice: Boolean
    transportation: String
    activities: String
    issueHandling: String
    pets: Boolean
    screenTime: Boolean
    smoker: Boolean
    rates: String
  }

  type Query {
    users: [User]
    user(id: ID!): User
    parents: [Parent]
    parent(id: ID!): Parent
    babysitters: [Babysitter]
    babysitter(id: ID!): Babysitter
  }


`;

module.exports = typeDefs;