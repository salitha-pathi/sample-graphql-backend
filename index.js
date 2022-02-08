'use strict';
const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { GraphQLSchema } = require("graphql");
const { RootQuery, Mutation } = require("./graphql/schemas/root-schema");


const app = express();
const PORT = 8000;

const schema = new GraphQLSchema({
	query: RootQuery,
	mutation: Mutation,
});

app.use(
	"/graphql",
	graphqlHTTP({
		schema: schema,
		graphiql: true,
	})
);

// listen app on PORT
app.listen(PORT, () => {
	console.log(`listening on port ${PORT}`);
});
