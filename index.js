const fs = require('fs');
const express = require('express');
const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');

const rootResolver = require('./src/api');

const rootSchema = fs.readFileSync('./src/api/index.graphql', { encoding: 'UTF-8' });

const app = express();
app.use('/graphql', graphqlHTTP({
  schema: buildSchema(rootSchema),
  rootValue: rootResolver,
  graphiql: true,
}));
app.listen(4000);
console.log('Running a GraphQL API server at http://localhost:4000/graphql');
