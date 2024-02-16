import AWS from 'aws-sdk';

AWS.config.update({
  region: 'eu-west-2',
  accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY,
});

const docClient = new AWS.DynamoDB.DocumentClient({ region: 'eu-west-2' });

export default docClient;
