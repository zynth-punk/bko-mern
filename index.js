const express = require('express');
const {graphqlHTTP} = require ('express-graphql');
const schema = require('./schema/postSchema')
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes/api');
const { allowedNodeEnvironmentFlags } = require('process');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 5000;
app.use('/api', routes);
app.use(cors());


mongoose.connect(process.env.DB, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('Database connected successfuly'))
    .catch(err => console.log(err));

mongoose.Promise = global.Promise;


app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));



app.use(express.static(__dirname, { dotfiles: 'allow' } ));


app.use((err, req, res, next) => {
    console.log(err);
    next();
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
});