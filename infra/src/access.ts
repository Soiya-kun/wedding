import { APIGatewayProxyResultV2 } from 'aws-lambda';
import { DynamoDBClient, PutItemCommand } from '@aws-sdk/client-dynamodb';
import { randomUUID } from 'crypto';

const client = new DynamoDBClient({});
const TABLE_NAME = process.env.TABLE_NAME as string;

export const handler = async (): Promise<APIGatewayProxyResultV2> => {
  await client.send(
    new PutItemCommand({
      TableName: TABLE_NAME,
      Item: {
        id: { S: randomUUID() },
        timestamp: { N: Date.now().toString() },
      },
    })
  );

  return {
    statusCode: 200,
    body: 'ok',
  };
};
