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
    requests: String
    contact: String
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
    profilePic: String
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
    myProfileDetailParent: Parent
    babysitters: [Babysitter]
    babysitter(id: ID!): Babysitter
    myProfileDetailBabysitter: Babysitter
    starredBabysitters: Parent
    interestedParents: Babysitter  
  }

  type Mutation {
    signup(firstName: String!, lastName: String!, email: String!, password: String!, userType: String!): Auth
    login(email: String!, password: String!): Auth
    createBabysitter(user: ID!, zone: String!, jobExp: String, otherExp: String, shortNotice: Boolean, transportation: String, activities: String, pets: Boolean, smoker: Boolean, rates: String, profilePic: String): Babysitter
    createParent(user: ID!, zone: String!, howMany: String, age: String, activities: String, allergies: String, pets: Boolean, smoker: Boolean, requests: String,contact: String): Parent
    updateBabysitter(zone: String, jobExp: String, otherExp: String, shortNotice: Boolean, transportation: String, activities: String, pets: Boolean, smoker: Boolean, rates: String): Babysitter
    updateParent(zone: String, howMany: String,age: String,activities: String,allergies: String,pets: Boolean,smoker: Boolean,requests: String,contact: String):Parent
    addToStarred(babySitter:ID!): Parent
    removeStarred(babySitter:ID!): Parent
  }
`;

module.exports = typeDefs;