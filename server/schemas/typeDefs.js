const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    firstName: String!
    lastName: String!
    email: String!
    userType: String!

  }

  type Parent {
    city: String!
    childrenHowMany: String!
    childrenAge: String!
    childrenActivites: String!
    childrenAllergies: String!
    hasPets: Boolean!
    hasScreenTimeRules: Boolean!
    allowSmokerBabysitter: Boolean!
    additionalConcerns: String!
  }

  type Babysitter {
    city: String!
    experience: String!
    otherExperience: String!
    shortNoticeAvailability: Boolean!
    transportationOptions: String!
    activities: String!
    behavioralIssueHandling: String!
    allowPets: Boolean!
    enforcedScreenTime: Boolean!
    rates: String!

  }

`;

module.exports = typeDefs;