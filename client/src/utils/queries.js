import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  query User($userId: ID!) {
    user(id: $userId) {
      _id
      firstName
      lastName
      email
      password
      userType
    }
  }
`;

export const QUERY_USERS = gql`
  query Users {
    users {
      _id
      firstName
      lastName
      email
      password
      userType
    }
  }
`;

export const QUERY_PARENT = gql`
  query Parent($parentId: ID!) {
    parent(id: $parentId) {
      user {
        firstName
        lastName
        email
        userType
      }
      activities
      age
      allergies
      howMany
      pets
      requests
      smoker
      zone
      _id
    }
  }
`;

export const QUERY_PARENTS = gql`
  query Parents($zone: String!) {
    parents(zone: $zone) {
      user {
        firstName
        lastName
        userType
        _id
      }
      _id
      activities
      age
      allergies
      howMany
      pets
      requests
      smoker
      zone
    }
  }
`;

export const QUERY_BABYSITTER = gql`
  query Babysitter($babysitterId: ID!) {
    babysitter(id: $babysitterId) {
      user {
        firstName
        lastName
        email
        userType
      }
      _id
      activities
      issueHandling
      jobExp
      otherExp
      pets
      rates
      shortNotice
      smoker
      transportation
      zone
    }
  }
`;

export const QUERY_BABYSITTERS = gql`
  query Babysitters($zone: String!) {
    babysitters(zone: $zone) {
      user {
        firstName
        lastName
        userType
      }
      _id
      activities
      issueHandling
      jobExp
      otherExp
      pets
      rates
      shortNotice
      smoker
      transportation
      zone
    }
  }
`;

export const QUERY_STARREDBABYSITTERS = gql`
query Parent($parentId: ID!) {
  parent(id: $parentId) {
    starredBabysitters
  }
}
`;

export const QUERY_INTERESTEDPARENTS = gql`
query Babysitter($babysitterId: ID!) {
  babysitter(id: $babysitterId) {
    interestedParents
  }
}
`;