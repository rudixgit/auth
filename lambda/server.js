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
app.use('/api', authenticatedRoute);
// Define your routes that need authentication check
authenticatedRoute.get('/', (req, res, next) => {
  res.json(res.locals.user);
});
authenticatedRoute.get('/api', (req, res, next) => {
  res.json(res.locals.user);
});

 
if (!process.env.LAMBDA_RUNTIME_DIR) {
  app.listen(process.env.PORT || 3001);
}

module.exports.handler = serverless(app);
