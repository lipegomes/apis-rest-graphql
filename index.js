const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const routes = require('./routes/index')
const graphqlServer = require('./graphql')

// Rest
app.use(bodyParser.json())
app.use(routes)

// GraphQL
graphqlServer.applyMiddleware({ app })

app.listen(3000, (err) => {
  if(err){
    console.log('Not possible to linsten on part 3000')
  } else {
  console.log('Server running on port 3000')
  }
})
