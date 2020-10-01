require('dotenv').config();
const serverless = require('serverless-http');
const express = require('express');
const bodyParser = require('body-parser');
const CognitoExpress = require('cognito-express');

const app = express();

const compression = require('compression');
const cors = require('cors');

app.use(compression());
app.use(cors());
app.use(bodyParser.json());

const authenticatedRoute = express.Router();

app.use('/api', authenticatedRoute);

// Initializing CognitoExpress constructor
const cognitoExpress = new CognitoExpress({
  region: 'eu-west-1',
  cognitoUserPoolId: 'eu-west-1_T6v05tjzh',
  tokenUse: 'access', // Possible Values: access | id
  tokenExpiration: 3600000, // Up to default expiration of 1 hour (3600000 ms)
});

authenticatedRoute.use((req, res, next) => {
  const accessTokenFromClient = req.headers.accesstoken;
  if (!accessTokenFromClient) { return res.status(401).send('Access Token missing from header'); }

  cognitoExpress.validate(accessTokenFromClient, (err, response) => {
    if (err) return res.status(401).send(err);
    res.locals.user = response;
    next();
  });
});

// Define your routes that need authentication check
authenticatedRoute.post('/', (req, res, next) => {
  res.send(`Hi ${res.locals.user.username}, your API call is authenticated!`);
});

app.get('/', (req, res) => { res.end('test'); });

if (!process.env.LAMBDA_RUNTIME_DIR) {
  app.listen(process.env.PORT || 3001);
}

module.exports.handler = serverless(app);
