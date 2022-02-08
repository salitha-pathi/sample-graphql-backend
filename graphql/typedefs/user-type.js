'use strict';
const { GraphQLSchema, GraphQLObjectType, GraphQLInt, GraphQLList, GraphQLString } = require("graphql");

const UserType = new GraphQLObjectType({
	name: "User",
	fields: () => ({
		id: { type: GraphQLInt },
		firstName: { type: GraphQLString },
		lastName: { type: GraphQLString },
		email: { type: GraphQLString },
		password: { type: GraphQLString },
	}),
});

module.exports = { UserType };
