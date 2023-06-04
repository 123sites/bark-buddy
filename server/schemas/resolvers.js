const { AuthenticationError } = require('apollo-server-express');
const { User, Dog } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    // user: async (parent, { username }) => {
    //   return User.findOne({ username }).populate('dogs');
    // },
    // dogs: async (parent, { owner }) => {
    //   const params = owner ? { owner } : {};
    //   return Dog.find(params).sort({ createdAt: -1 });
    // },
    // dog: async (parent, { dogId }) => {
    //   return Dog.findOne({ _id: dogId });
    // },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate('dogs');
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
    addDog: async (parent, { name, breeds, age, gender, photos }, context) => {
      if (context.user) {
        const dog = await Dog.create({
          name,
          breeds,
          age,
          gender, 
          photos,
          owner: context.user.username,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { dogs: dog._id } }
        );

        return dog;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    removeDog: async (parent, { dogId }, context) => {
      if (context.user) {
        /*const dog = await Dog.findOneAndDelete({
          _id: dogId,
          owner: context.user.username,
        });*/

        return User.findOneAndUpdate(
          { _id: context.user._id },
          { 
            $pull: { 
              'dogs': dogId 
              },
            },
          { new: true}
        );
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },
};

module.exports = resolvers;

