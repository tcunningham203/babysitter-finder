import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const SIGNUP = gql`
  mutation signup(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
    $userType: String!
  ) {
    signup(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
      userType: $userType
    ) {
      token
      user {
        _id
      }
    }
  }
`;

export const CREATE_BABYSITTER = gql`
  mutation createBabysitter ($user: ID!, $zone: String!, $jobExp: String, $otherExp: String, $shortNotice: Boolean, $transportation: String, $activities: String, $pets: Boolean, $smoker: Boolean, $rates: String, $profilePic: String) {
    createBabysitter(user: $user, zone: $zone, jobExp: $jobExp, otherExp: $otherExp, shortNotice: $shortNotice, transportation: $transportation, activities: $activities, pets: $pets, smoker: $smoker, rates: $rates, profilePic: $profilePic) {
      user {
        _id
        firstName
        lastName
        email
      }
      zone
      jobExp
      otherExp
      shortNotice
      transportation
      activities
      pets
      smoker
      rates
      profilePic
    }
  }
`;

export const CREATE_PARENT = gql`
  mutation CreateParent($user: ID!, $zone: String!, $howMany: String, $age: String, $activities: String, $allergies: String, $pets: Boolean, $smoker: Boolean, $requests: String, $contact: String) {
    createParent(user: $user, zone: $zone, howMany: $howMany, age: $age, activities: $activities, allergies: $allergies, pets: $pets, smoker: $smoker, requests: $requests, contact: $contact) {
      user {
        _id
      }
      zone
      howMany
      age
      activities
      allergies
      pets
      smoker
      requests
      contact
    }
  }
`;

export const UPDATE_BABYSITTER = gql`
  mutation UpdateBabysitter($profilePic: String, $zone: String, $jobExp: String, $otherExp: String, $shortNotice: Boolean, $transportation: String, $activities: String, $pets: Boolean, $smoker: Boolean, $rates: String) {
    updateBabysitter(profilePic: $profilePic, zone: $zone, jobExp: $jobExp, otherExp: $otherExp, shortNotice: $shortNotice, transportation: $transportation, activities: $activities, pets: $pets, smoker: $smoker, rates: $rates) {
      activities
      jobExp
      otherExp
      pets
      profilePic
      rates
      shortNotice
      smoker
      transportation
      zone
    }
  }
`;

export const UPDATE_PARENT = gql`
  mutation updateParent($zone: String, $howMany: String, $age: String, $activities: String, $allergies: String, $pets: Boolean, $smoker: Boolean, $requests: String, $contact: String) {
    updateParent(zone: $zone, howMany: $howMany, age: $age, activities: $activities, allergies: $allergies, pets: $pets, smoker: $smoker, requests: $requests, contact: $contact) {
      activities
      age
      allergies
      howMany
      pets
      requests
      smoker
      zone
      contact
    }
  }
`;

export const ADD_TO_STARRED = gql`
mutation AddToStarred($babySitter: ID!) {
  addToStarred(babySitter: $babySitter) {
    _id
    zone
    howMany
    age
    activities
    allergies
    pets
    smoker
    requests
    starredBabysitters {
      _id
    }
  }
}`;

// export const REMOVE_STARRED = gql`

// `;