const { AuthenticationError,ValidationError } = require('apollo-server-express');
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
        return Parent.find({ zone }).populate('user','starredBabysitters');
    },
    parent: async (parent, args) => {
        return Parent.findById(args.id).populate('user','starredBabysitters');
    },
    babysitters: async (parent, { zone }) => {
        return Babysitter.find({ zone }).populate('user','interestedParents');
    },
    babysitter: async (parent, args) => {
      console.log(args.id)
        return Babysitter.findById(args.id).populate('user','interestedParents');
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
      let exists=await User.findOne({email:args.email});
      if(exists){
        throw new ValidationError("User Already Exists !!")
      }
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
      if (context.user) {
        let babysitter=await Babysitter.findOne({user:context.user._id});
        if(!babysitter){
          throw new ValidationError("User is not assosite with any babysitter")
        }
        return await Babysitter.findOneAndUpdate({user:context.user._id}, args, { new: true });
      }

      throw new AuthenticationError('Not logged in');
    },

    updateParent: async (parent, args, context) => {
      // parent model
      if (context.user) {
        let parent=await Parent.findOne({user:context.user._id});
        if(!parent){
          throw new ValidationError("User is not assosite with any parent")
        }
        return await Parent.findOneAndUpdate({user:context.user._id}, args, { new: true });
      }

      throw new AuthenticationError('Not logged in');
    },
    addToStarred: async (parent, args,context) => {
      if (context.user) {
        let parent=await Parent.findOne({user:context.user._id})
        let prev_starredBabysitters=parent.starredBabysitters;
        prev_starredBabysitters.push(args.babySitter);

        let babysitter=await Babysitter.findOne({_id:args.babySitter})
        let prev_interestedParents=babysitter.interestedParents;
        prev_interestedParents.push(parent._id)
        await Babysitter.findByIdAndUpdate(babysitter._id,{interestedParents:prev_interestedParents},{new:true})
        
        return await Parent.findByIdAndUpdate(parent._id, {starredBabysitters:prev_starredBabysitters}, { new: true }).populate('starredBabysitters');
      }
      
      throw new AuthenticationError('Not logged in');
    },
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


module.exports = resolvers;