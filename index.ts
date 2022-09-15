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

  console.log(event);
  console.log(event.path);

  // If the requested path is exactly '/brawlers', return all brawlers.
  if (event.path === '/brawlers') {
    responseBody = JSON.stringify(brawlers);
  } else {
    responseBody = JSON.stringify(event);
  }
  // If the requested path contains '/brawlers', this means that a specific brawler
  // is being requested by its ID.
  // else if (event.path.includes('/brawlers')) {
  //   const brawlerID = +event.pathParameters['brawlerID'];
  //   const foundIndex = brawlers.brawlers.findIndex((brawler) => {
  //     return brawlerID === brawler.id;
  //   });
  //   if (foundIndex === -1) {
  //     const response = {
  //       statusCode: 404,
  //       headers: {
  //         'Content-Type': 'application/json',
  //         'Access-Control-Allow-Origin': '*',
  //       },
  //       body: 'Brawler with ID ' + brawlerID + ' does not exist.',
  //     };
  //     return response;
  //   } else {
  //     responseBody = JSON.stringify(brawlers.brawlers[foundIndex]);
  //   }
  // }

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
