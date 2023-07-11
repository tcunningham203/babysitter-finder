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
    smoker: Boolean
    requests: String,
    starredBabysitters:[Babysitter]
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
    pets: Boolean
    smoker: Boolean
    rates: String
    interestedParents:[Parent]
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    users: [User]
    user(id: ID!): User
    parents(zone: String!): [Parent]
    parent(id: ID!): Parent
    babysitters(zone: String!): [Babysitter]
    babysitter(id: ID!): Babysitter
    starredBabysitters(id: ID!): Parent
    interestedParents(id: ID!): Babysitter  
  }

  type Mutation {
    signup(firstName: String!, lastName: String!, email: String!, password: String!, userType: String!): Auth
    login(email: String!, password: String!): Auth
    createBabysitter(user: ID!, zone: String!, jobExp: String!, otherExp: String!, shortNotice: Boolean!, transportation: String!, activities: String!, issueHandling: String!, pets: Boolean!, smoker: Boolean!, rates: String!): Babysitter
    createParent(user: ID!, zone: String!, howMany: String!, age: String!, activities: String!, allergies: String!, pets: Boolean!, smoker: Boolean!, requests: String!): Parent
    updateBabysitter(zone: String, jobExp: String, otherExp: String, shortNotice: Boolean, transportation: String, activities: String, issueHandling: String, pets: Boolean, smoker: Boolean, rates: String): Babysitter
    updateParent(zone: String,howMany: String,age: String,activities: String,allergies: String,pets: Boolean,smoker: Boolean,requests: String):Parent
    addToStarred(babySitter:ID!):Parent
    removeStarred(babySitter:ID!):Parent
  }
`;

module.exports = typeDefs;