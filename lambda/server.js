require('dotenv').config();
const serverless = require('serverless-http');
const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');


const CognitoExpress = require('cognito-express');

const app = express();

const compression = require('compression');
const cors = require('cors');
const { query, put,del } = require('./src/db.js');

app.use(compression());
app.use(cors());
app.use(bodyParser.json());

const authenticatedRoute = express.Router();

// Initializing CognitoExpress constructor
const cognitoExpress = new CognitoExpress({
  region: 'eu-west-1',
  cognitoUserPoolId: 'eu-west-1_T6v05tjzh',
  tokenUse: 'access', // Possible Values: access | id
  tokenExpiration: 3600000, // Up to default expiration of 1 hour (3600000 ms)
});

function containsAny(str, substrings) {
  for (var i = 0; i != substrings.length; i++) {
    var substring = substrings[i];
    if (str.indexOf(substring) != -1) {
      return true;
    }
  }
  return false;
}

authenticatedRoute.use((req, res, next) => {
  const accessTokenFromClient = req.headers.accesstoken;
  if (!accessTokenFromClient) {
    return res.status(200).json({ name: 'TokenMissing' });
  }

  cognitoExpress.validate(accessTokenFromClient, (err, response) => {
    if (err)
      return res
        .status(200)
        .json(
          err === 'Not a valid JWT token' ? { name: 'NotValidToken' } : err
        );
    res.locals.user = response;
    next();
  });
});

// Define your routes that need authentication check

 
 
const modded = (json, user) => {
  const a = json.collection || json.tip;
  const x = containsAny(a, ['all']) ? a : a + '' + user.username;
  return ({
    ...json,
    username:user.username,
    tip:x,
    collection: x,
  });
}

app.get('/heartbeat', authenticatedRoute, function (req, res) {
  res.json({})
});
app.post('/db/:id', authenticatedRoute, async (req, res, next) => {
  
  
fetch('https://rudixdb.herokuapp.com/v1/query', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'x-hasura-admin-secret': 'maximus',
  },
  body: JSON.stringify({
    type: 'insert',
    args: {
      table: { name: req.params.id, schema: 'public' },
      objects: [
        {
          ...req.body,
          user_id: res.locals.user.username,
        },
      ],
      returning: [],
    },
  }),
})
  .then(result => {
    return result.json();
  })
  .then(data => {
    res.json(data);
    //res.send(data);
  });
 
});
app.post('/del', authenticatedRoute, async (req, res, next) => {
  const modd = modded(req.body, res.locals.user);

  const result = await del(modd);
  res.json(result);
});

app.post('/dbpublic', async (req, res, next) => {
  const modd = modded(req.body, {username:'nonexist'});
  const result = await query(modd);
  res.json(result);
});

app.post('/insert', authenticatedRoute, async (req, res, next) => {
  const modd = modded(req.body, res.locals.user);
  const result = await put(modd);
  res.json(result);
});
app.post('/register', async (req, res, next) => {
  const {username,email,vreme,tip} = req.body 
  const result = await put({ username, email, vreme, tip });
  res.json(result);
});

if (!process.env.LAMBDA_RUNTIME_DIR) {
  app.listen(process.env.PORT || 3001);
}

module.exports.handler = serverless(app);
