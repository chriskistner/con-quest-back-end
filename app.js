const port = process.env.PORT || 8080;
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.use(cors());
app.disable('x-powered-by');
require('dotenv').config();

if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'))
}

const cards = require('./src/routes/cards-R');
const characters = require('./src/routes/characters-R.js');
const objectives = require('./src/routes/objectives-R');

app.use('/characters', characters);
app.use('/characters/:character_id/cards', characters);
app.use('/characters/:character_id/objectives', objectives);

app.use('/cards', cards);
app.use('/cards/:card_id', cards);

app.use('./objectives/', objectives );
app.use('./objectives/:objective_id', objectives );

app.use(function(req, res, next) {
  next({status: 404, error: 'Route Not Found'})
});

app.use((err, _req, res, _next)=> {
  console.error("ERROR: ", err)
  const status = err.status || 500
  const error = err.error || 'Internal Server Error'
  const stack = err.stack
  res.status(status).json({ error, status, stack })
});

if (process.env.NODE_ENV !== 'development') {
  const listener = () => console.log(`listening on ${port}`)
  let server = app.listen(port, listener)
}