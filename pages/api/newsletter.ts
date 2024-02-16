import {
  DeleteItemCommand,
  DynamoDBClient,
  GetItemCommand,
  PutItemCommand,
  UpdateItemCommand,
} from '@aws-sdk/client-dynamodb';
import { NextApiRequest, NextApiResponse } from 'next';
import { v4 as uuidv4 } from 'uuid';

const dynamoDBClient = new DynamoDBClient({});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { method, body, query } = req;

  try {
    switch (method) {
      case 'PUT':
        const putItemParams = {
          TableName: 'newsletter',
          Item: {
            userID: { S: uuidv4() },
            email: { S: body.email },
            subscriptionStatus: { BOOL: true }, // Assuming default is subscribed
          },
        };
        await dynamoDBClient.send(new PutItemCommand(putItemParams));
        return res.status(201).json(putItemParams.Item);

      case 'GET':
        const getItemParams = {
          TableName: 'newsletter',
          Key: {
            userID: { S: query.userID as string },
          },
        };
        const { Item } = await dynamoDBClient.send(
          new GetItemCommand(getItemParams),
        );
        return res.status(200).json(Item);

      case 'POST':
        const updateItemParams = {
          TableName: 'newsletter',
          Key: {
            userID: { S: body.userID as string },
          },
          UpdateExpression: 'SET email = :e, subscriptionStatus = :s',
          ExpressionAttributeValues: {
            ':e': { S: body.email as string },
            ':s': { BOOL: body.subscriptionStatus as boolean },
          },
          ReturnValues: 'ALL_NEW',
        };
        const { Attributes } = await dynamoDBClient.send(
          new UpdateItemCommand(updateItemParams),
        );
        return res.status(200).json(Attributes);

      case 'DELETE':
        const deleteItemParams = {
          TableName: 'newsletter',
          Key: {
            userID: { S: body.userID as string },
          },
        };
        await dynamoDBClient.send(new DeleteItemCommand(deleteItemParams));
        return res.status(204).json({});

      default:
        return res.status(405).json({ error: 'Method Not Allowed' });
    }
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
