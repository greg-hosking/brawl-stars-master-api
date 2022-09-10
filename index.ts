import {
  APIGatewayProxyEvent,
  APIGatewayProxyResultV2,
  Handler,
} from 'aws-lambda';

import { brawlers } from './brawlers';

export const handler: Handler = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResultV2> => {
  let responseBody: string;
  if (event.path === '/brawlers' && event.pathParameters === null) {
    responseBody = JSON.stringify(brawlers);
  }

  responseBody = JSON.stringify(
    'EVENT PATH: ' +
      event.path +
      ' EVENT PATH PARAMS: ' +
      event.pathParameters['brawlerID']
  );

  const response = {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
    body: responseBody,
  };
  return response;
};
