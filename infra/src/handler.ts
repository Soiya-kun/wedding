import { APIGatewayProxyEventV2, APIGatewayProxyResultV2 } from 'aws-lambda';
import { DynamoDBClient, PutItemCommand } from '@aws-sdk/client-dynamodb';
import { randomUUID } from 'crypto';

const client = new DynamoDBClient({});
const TABLE_NAME = process.env.TABLE_NAME as string;
const TTL_DAYS = 90;

export const handler = async (
  event: APIGatewayProxyEventV2
): Promise<APIGatewayProxyResultV2> => {
  if (!event.body) {
    return { statusCode: 400, body: 'missing body' };
  }

  const token = randomUUID();
  const ttl = Math.floor(Date.now() / 1000 + TTL_DAYS * 24 * 60 * 60);

  await client.send(
    new PutItemCommand({
      TableName: TABLE_NAME,
      Item: {
        token: { S: token },
        body: { S: event.body },
        ttl: { N: ttl.toString() },
      },
    })
  );

  return {
    statusCode: 200,
    body: JSON.stringify({ token }),
  };
};
