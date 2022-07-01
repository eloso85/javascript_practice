const express = require('express');
//graphQL
const { graphqlHTTP } = require('express-graphql')
//schema
const schema = require('./schema/schema')

//Port
const port = 5000
//call express
const app = express();

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: 'development'
}))

app.listen(port, console.log(`server runnign on port ${port}`))