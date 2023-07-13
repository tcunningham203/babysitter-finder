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
      _id
      user {
        firstName
        lastName
        email
      }
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

export const QUERY_PARENTS = gql`
  query Parents($zone: String!) {
    parents(zone: $zone) {
      _id
      user {
        firstName
        lastName
        email
      }
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
      _id
      user {
        firstName
        lastName
        email
      }
      activities
      jobExp
      otherExp
      pets
      rates
      shortNotice
      smoker
      transportation
      zone
      profilePic
    }
  }
`;

export const QUERY_BABYSITTERS = gql`
  query Babysitters {
    babysitters {
      _id
      user {
        firstName
        lastName
        email
      }
      activities
      jobExp
      otherExp
      pets
      rates
      shortNotice
      smoker
      transportation
      zone
      profilePic
    }
  }
`;

export const QUERY_STARREDBABYSITTERS = gql`
  query StarredBabysitters {
    starredBabysitters {
      starredBabysitters {
        _id
        user {
          firstName
          lastName
          email
        }
      activities
      jobExp
      otherExp
      pets
      rates
      shortNotice
      smoker
      transportation
      zone
      profilePic
      }
    }
  }
`;

export const QUERY_INTERESTEDPARENTS = gql`
  query InterestedParents {
    interestedParents {
      interestedParents {
        _id
        user {
          firstName
          lastName
          email
        }
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
  }
`;

export const QUERY_MY_PROFILE_PARENT=gql`
query MyProfileDetailParent {
  myProfileDetailParent {
    _id
    user {
      _id
      firstName
      lastName
      email
      userType
    }
    zone
    howMany
    age
    activities
    allergies
    pets
    smoker
    requests
  }
}`

export const QUERY_MY_PROFILE_BABYSITTER=gql`
query MyProfileDetailBabysitter {
  myProfileDetailBabysitter {
    _id
    user {
      _id
      firstName
      lastName
      email
      password
      userType
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
}`