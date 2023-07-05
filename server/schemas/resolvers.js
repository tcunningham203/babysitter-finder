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
    // createUser: async (parent, { firstName,lastName,email,password,userType, }) => {
    //   return await User.create({firstName,lastName,email,password,userType,});
    // },
    // sign up ▼
    createUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user); 

      return { token, user };
    },
    // login: async (parent,{ email, password }) => {
    //   const user =await User.findOne({email})
    //   if (!user) {
    //     throw new Error('User not found!');
    //   }
    //   const passwordMatch = bcrypt.compareSync(password, user.password);
    //   if (!passwordMatch) {
    //     throw new Error('Invalid password!');
    //   }
    //   // Generate a JSON Web Token (JWT)
    //   const token = jwt.sign({ userId: user.id }, 'your-secret-key', {
    //     expiresIn: '1h',
    //   });
    //   return token;
    // },
    login: async (parent,{ email, password }) => {
      const user =await User.findOne({email})

      if (!user) {
        throw new AuthenticationError('User not found!');
      }

      const passwordMatch = bcrypt.compareSync(password, user.password);

      if (!passwordMatch) {
        throw new AuthenticationError('Invalid password!');
      }

      // Generate a JSON Web Token (JWT)
      const token = signToken(user);

      return { token, user };
    },
  }
}

module.exports = resolvers;