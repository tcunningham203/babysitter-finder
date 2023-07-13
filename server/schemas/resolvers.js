const {
  AuthenticationError,
  ValidationError,
} = require("apollo-server-express");
const { User, Parent, Babysitter } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },
    user: async (parent, args) => {
      return User.findById(args.id);
    },
    parents: async (parent, { zone }) => {
      return Parent.find({ zone })
      .populate("user")
      .populate({path: 'starredBabysitters', model: Babysitter,
      populate: {path: "user", select: "firstName lastName email"}})
    },
    parent: async (parent, args) => {
      return Parent.findById(args.id)
      .populate("user")
      .populate({path: 'starredBabysitters', model: Babysitter, 
      populate: {path: "user", select: "firstName lastName email"}});
    },
    babysitters: async () => {
      return Babysitter.find()
      .populate("user")
      .populate({path: 'interestedParents', model: Parent,
      populate: {path: "user", select: "firstName lastName email"}});
    },
    babysitter: async (parent, args) => {
      console.log(args.id);
      return Babysitter.findById(args.id)
      .populate("user")
      .populate({path: 'interestedParents', model: Parent,
      populate: {path: "user", select: "firstName lastName email"}});
    },
    starredBabysitters: async (parent, args, context) => {
      if (context.user) {
        return Parent.findOne({user: context.user._id})
      .populate("user")
      .populate({path: 'starredBabysitters', model: Babysitter,
      populate: {path: "user", select: "firstName lastName email"}});
    }
    throw new AuthenticationError("Not logged in");
    },
    interestedParents: async (parent, args, context) => {
      if (context.user) {
      return Babysitter.findOne({user: context.user._id})
      .populate("user")
      .populate({path: 'interestedParents', model: Parent,
      populate: {path: "user", select: "firstName lastName email"}});
      }
      throw new AuthenticationError("Not logged in");
    },
    myProfileDetailParent:async(parent,args,context)=>{
      if (context.user) {
      return Parent.findOne({user:context.user._id})
      .populate("user")
      .populate({path: 'starredBabysitters', model: Babysitter, 
      populate: {path: "user", select: "firstName lastName email"}});
      }
      throw new AuthenticationError("Not logged in");
    },
    myProfileDetailBabysitter:async(parent,args,context)=>{
      if (context.user) {
        return Babysitter.findOne({user:context.user._id})
        .populate("user")
        .populate({path: 'interestedParents', model: Parent,
        populate: {path: "user", select: "firstName lastName email"}});
      }
      throw new AuthenticationError("Not logged in");
    }
  },
  Mutation: {
    // sign up ▼
    signup: async (parent, args) => {
      let exists = await User.findOne({ email: args.email });
      if (exists) {
        throw new ValidationError("User Already Exists !!");
      }
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("User not found!");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },
    createBabysitter: async (parent, args) => {
      let babysitter = await Babysitter.create(args);
      return babysitter;
    },
    createParent: async (parent, args) => {
      let parentObj = await Parent.create(args);
      return parentObj;
    },
    updateBabysitter: async (parent, args, context) => {
      if (context.user) {
        let babysitter = await Babysitter.findOne({ user: context.user._id });
        if (!babysitter) {
          throw new ValidationError("User is not assosite with any babysitter");
        }
        return await Babysitter.findOneAndUpdate(
          { user: context.user._id },
          args,
          { new: true }
        );
      }

      throw new AuthenticationError("Not logged in");
    },
    updateParent: async (parent, args, context) => {
      if (context.user) {
        let parent = await Parent.findOne({ user: context.user._id });
        if (!parent) {
          throw new ValidationError("User is not assosite with any parent");
        }
        return await Parent.findOneAndUpdate({ user: context.user._id }, args, {
          new: true,
        });
      }

      throw new AuthenticationError("Not logged in");
    },
    addToStarred: async (parent, args, context) => {
      if (context.user) {
        let parent = await Parent.findOne({ user: context.user._id });
        if (!parent) {
          throw new ValidationError("User is not assosite with any parent");
        }

        let prev_starredBabysitters = parent.starredBabysitters;
        prev_starredBabysitters.push(args.babySitter);

        let babysitter = await Babysitter.findOne({ _id: args.babySitter });
        if (!babysitter) {
          throw new ValidationError("Babysitter id is incorrect !!");
        }
        
        let prev_interestedParents = babysitter.interestedParents;
        prev_interestedParents.push(parent._id);
        await Babysitter.findByIdAndUpdate(
          babysitter._id,
          { interestedParents: prev_interestedParents },
          { new: true }
        );

        return await Parent.findByIdAndUpdate(
          parent._id,
          { starredBabysitters: prev_starredBabysitters },
          { new: true }
        )
          .populate("starredBabysitters")
          .populate("user");
      }

      throw new AuthenticationError("Not logged in");
    },
    removeStarred: async (parent, args, context) => {
      if (context.user) {
        
        let babysitter = await Babysitter.findOne({ user: context.user._id });
        if (!babysitter) {
          throw new ValidationError("Babysitter id is incorrect !!");
        }
        let prev_interestedParents = babysitter.interestedParents;
        prev_interestedParents = prev_interestedParents.filter(
          (id) => id != args.babySitter
        );

        let parent = await Parent.findOne({ _id: args.parent });
        if (!parent) {
          throw new ValidationError("User is not assosite with any parent");
        }
        let prev_starredBabysitters = parent.starredBabysitters;
        prev_starredBabysitters = prev_starredBabysitters.filter(
          (id) => id.toString() != babysitter._id.toString()
        );

        await Babysitter.findByIdAndUpdate(
          babysitter._id,
          { interestedParents: prev_interestedParents },
          { new: true }
        );

        return await Parent.findByIdAndUpdate(
          parent._id,
          { starredBabysitters: prev_starredBabysitters },
          { new: true }
        )
          .populate("starredBabysitters")
          .populate("user");
      }

      throw new AuthenticationError("Not logged in");
    },
  },
};

module.exports = resolvers;
