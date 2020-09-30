require('dotenv').config();
const serverless = require('serverless-http');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const { authenticate, authenticationError } = require('aws-cognito-express');
const compression = require('compression');
const cors = require('cors');

app.use(compression());
app.use(cors());
app.use(bodyParser.json());
app.use(
  authenticate({
    region: 'eu-west-1',
    userPoolId: 'eu-west-1_sk5LfmU4g',
    tokenUse: ['id', 'access'],
    audience: ['6d5of62ku9g4pcl2jpp0rcng67'],
  }),
);
app.use(authenticationError());
const { put, query } = require('./src/db.js');

app.post('/register', async (req, res) => {
  res.json(req.body);
});
app.get('/', (req, res, next) => {
  console.log('JWT payload: ', req.cognito);
  res.end('ok');
});

app.get('/test', (req, res) => { res.end('ok'); });

app.post('/db/', async (req, res) => {
  const data = await query(req.body);
  res.json(data);
});
app.post('/dbput/', async (req, res) => {
  const data = await put(req.body);
  res.json(data);
});

if (!process.env.LAMBDA_RUNTIME_DIR) {
  app.listen(process.env.PORT || 3001);
}

module.exports.handler = serverless(app);
