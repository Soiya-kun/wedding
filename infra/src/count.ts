import { APIGatewayProxyResultV2 } from 'aws-lambda';
import { DynamoDBClient, ScanCommand } from '@aws-sdk/client-dynamodb';

const client = new DynamoDBClient({});
const TABLE_NAME = process.env.TABLE_NAME as string;

export const handler = async (): Promise<APIGatewayProxyResultV2> => {
  const result = await client.send(
    new ScanCommand({ TableName: TABLE_NAME, Select: 'COUNT' })
  );
  const count = result.Count ?? 0;
  return {
    statusCode: 200,
    body: JSON.stringify({ count }),
  };
};
