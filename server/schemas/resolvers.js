const { AuthenticationError } = require('apollo-server-express');
const { User, Parent, Babysitter } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },
    user: async (parent, args) => {
      return User.findById(args.id);
    },
    parents: async (parent, { zone }) => {
        return Parent.find({ zone }).populate('user');
    },
    parent: async (parent, args) => {
        return Parent.findById(args.id).populate('user');
    },
    babysitters: async (parent, { zone }) => {
        return Babysitter.find({ zone }).populate('user');
    },
    babysitter: async (parent, args) => {
        return Babysitter.findById(args.id).populate('user');
    },
    starredBabysitters: async () => {
      // Parent model
      // findById({ starredBabysitters })
    },
    interestedParents: async () => {
      // Babysitter model
      // findById(args.id)
    }
  },
  Mutation: {
    // sign up ▼
    createUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user); 

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({email})

      if (!user) {
        throw new AuthenticationError('User not found!');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
    // look at solved folder in unit 22 activity 26 
    // resolvers and typeDefs files for reference
    createBabysitter: async (parent, args) => {
      // perfect
      let babysitter = await Babysitter.create(args);
      return babysitter;
    },
    createParent: async (parent, args) => {
      // perfect
      let parentObj = await Parent.create(args)
      return parentObj;
    },
    updateBabysitter: async (parent, args, context) => {
      // babysitter model
      if (context.babysitter) {
        return await Babysitter.findByIdAndUpdate(context.babysitter._id, args, { new: true });
      }

      throw new AuthenticationError('Not logged in');
    },
    updateParent: async (parent, args, context) => {
      // parent model
      if (context.parent) {
        return await Babysitter.findByIdAndUpdate(context.parents._id, args, { new: true });
      }

      throw new AuthenticationError('Not logged in');
    },
    addToStarred: async (parent, args) => {
      // this one's a bit more complicated 
      // new fields have been added to babysitter and parent models
      // and im thinking about getting rid of Starred model all together

      // when a parent saves a babysitter to starred, 
      // the babysitter's profile should be added to the parents starredBabysitters list,
      // and the parent that starred the babysitter should be added to their interested parents list

      // babysitter and parent models
      //const {user,babySitter}=args;

    },
    // removeFromStarred: async (parents, args) => {

    // }
  }
}

module.exports = resolvers;