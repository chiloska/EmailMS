const app = require('express')();
const {ApolloServer, gql}= require('apollo-server-express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;


// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Query {
    hello: String
  }
`;

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    hello: () => 'Hello world!',
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.applyMiddleware({ app });

app.use(bodyParser.json());

app.get('/', (req, res)=>{
    res.send('Hello Gateway');
});

app.listen(PORT, ()=>{
    console.log(`Listening API Gateway in port ${PORT}`);
    console.log(`Listening Graphql endpoint in http://localhost:${PORT}${server.graphqlPath}`)
});