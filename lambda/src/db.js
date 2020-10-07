const AWS = require('aws-sdk');

// Set the region
AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  sessionToken: process.env.AWS_SESSION_TOKEN,
  region: 'eu-central-1',
});
const db = new AWS.DynamoDB.DocumentClient();

async function put(json) {
  return new Promise((resolve, reject) => {
    db.put({ TableName: 'ddb', Item: json }, () => {
      resolve({});
    });
  });
}


async function del({ id, collection  }) {
  const params = {
    TableName: 'ddb',
    Key: {
      tip: collection,
      vreme: id,
    },
    ConditionExpression: 'vreme = :val',
    ExpressionAttributeValues: {
      ':val': id,
    },
  };
  return new Promise((resolve, reject) => {
    db.delete(params, (x,y) => {
      console.log(x,y);
      resolve({});
    });
  });
}

 

async function query({
  id, collection, limit, descending, count, fields,
}) {
  const params = {
    TableName: 'ddb',
    KeyConditionExpression: 'tip = :hkey and vreme >= :ukey',
    ExpressionAttributeValues: {
      ':hkey': collection,
      ':ukey': id || 1,
    },
    Limit: limit || 100,
    ScanIndexForward: descending || false,
    ReturnConsumedCapacity: 'TOTAL',
  };
  if (fields) {
    params.ProjectionExpression = fields;
  }
  if (count) {
    params.Select = 'COUNT';
  }
  return new Promise((resolve) => {
    db.query(params, (err, data) => {
      if (data.Count === 1) {
        resolve(data.Items[0]);
      }
      resolve(data);
    });
  });
}

module.exports = {
  put,
  query,
  del,
};
