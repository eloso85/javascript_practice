const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./config/db')
//graphQL
const { graphqlHTTP } = require('express-graphql')
//schema
const schema = require('./schema/schema')

//Port
const port = 5000
//call express
const app = express();

//connect DB
connectDB();

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: 'development'
}))

app.listen(port, console.log(`server runnign on port ${port}`))