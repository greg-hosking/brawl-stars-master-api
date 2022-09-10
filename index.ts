import {
  APIGatewayProxyEvent,
  APIGatewayProxyResultV2,
  Handler,
} from 'aws-lambda';

import { brawlers } from './brawlers';

export const handler: Handler = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResultV2> => {
  const response = {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify(brawlers),
  };
  return response;
};
