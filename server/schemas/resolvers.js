const { AuthenticationError } = require('apollo-server-express');
const { User, Parent, Babysitter } = require('../models');
const bcrypt = require('bcrypt');
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
    }
  },
  Mutation: {
    // sign up ▼
    createUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user); 

      return { token, user };
    },
    login: async (parent,{ email, password }) => {
      const user =await User.findOne({email})

      if (!user) {
        throw new AuthenticationError('User not found!');
      }

      const passwordMatch = bcrypt.compareSync(password, user.password);

      if (!passwordMatch) {
        throw new AuthenticationError('Invalid password!');
      }

      const token = signToken(user);

      return { token, user };
    },
    // look at solved folder in unit 22 activity 26 
    // resolvers and typeDefs files for reference
    createBabysitter: async (parent, args) => {
      // babysitter model
      // associate with user who is babysitter thru user field
      let babysitter= await Babysitter.create(args);
      return babysitter;
    },
    createParent: async (parent, args) => {
      // parent model
      // associate with user who is parent thru user field
      let parentObj=await Parent.create(args)
      return parentObj;
    },
    updateBabysitter: async (parent,args) => {
      // babysitter model
      let {_id}=args;
      delete args["_id"];
      console.log(args,_id)
      let babySitter=await Babysitter.findOneAndUpdate({_id},args)
      console.log(babySitter);
      return babySitter;
    },
    updateParent: async (parent,args) => {
      // parent model
      let {_id}=args;
      delete args["_id"];
      let parentObj=await Parent.findOneAndUpdate({_id},args)
      return parentObj;
    },
    addToStarred: async (parent,args) => {
      // this one's a bit more complicated 
      // new fields have been added to babysitter and parent models
      // and im thinking about getting rid of Starred model all together

      // when a parent saves a babysitter to starred, 
      // the babysitter's profile should be added to the parents starredBabysitters list,
      // and the parent that starred the babysitter should be added to their interested parents list

      // babysitter and parent models
      //const {user,babySitter}=args;

    },
  }
}

module.exports = resolvers;