const express = require('express');

const app = express();
const bodyParser = require('body-parser');

// Models
require('./models/Message');

// BodyParser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DB Connect
require('./config/dbconnect');

// Cross Origin
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

// Routes
app.use('/api/message', require('./routes/message'));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));

// To push to heroku, we just do 'git push heroku master' from the backend
