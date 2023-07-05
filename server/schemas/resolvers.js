// const { AuthenticationError } = require('apollo-server-express');
const { User, Parent, Babysitter } = require('../models');
// const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },
    user: async (parent, args) => {
      return User.findById(args.id);
    },
    parents: async () => {
        return Parent.find({}).populate('user');
    },
    parent: async (parent, args) => {
        return Parent.findById(args.id).populate('user');
    },
    babysitters: async () => {
        return Babysitter.find({}).populate('user');
    },
    babysitter: async (parent, args) => {
        return Babysitter.findById(args.id).populate('user');
    }
  }
}

module.exports = resolvers;