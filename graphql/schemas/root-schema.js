'use strict';
const { GraphQLSchema, GraphQLObjectType, GraphQLInt, GraphQLList, GraphQLString } = require("graphql");
const {UserResolver} = require("../resolvers/user.resolver");
const { UserType } = require("../typedefs/user-type");

const userResolver = new UserResolver()

const RootQuery = new GraphQLObjectType({
	name: "RootQueryType",
	fields: {
		getAllUsers: {
			type: new GraphQLList(UserType),
			resolve: (parent, args) => userResolver.getAllUsers(parent, args),
		},
		getUserById: {
			type: UserType,
			args: {
				id: { type: GraphQLInt },
			},
			resolve: UserResolver.getUserById,
		},
	},
});

const Mutation = new GraphQLObjectType({
	name: "Mutation",
	fields: {
		createUser: {
			type: UserType,
			args: {
				firstName: { type: GraphQLString },
				lastName: { type: GraphQLString },
				email: { type: GraphQLString },
				password: { type: GraphQLString },
			},
			resolve: (parent, args) => {
                userData.push({
                    id: userData.length + 1,
                    firstName: args.firstName,
                    lastName: args.lastName,
                    email: args.email,
                    password: args.password,
                });
                return args
            },
		},
	},
});

module.exports = { RootQuery, Mutation };
