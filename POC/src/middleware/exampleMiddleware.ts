// export const exampleMiddleware = async (event: any, context: any, next: Function) => {
//     // Perform any necessary validation or logging here
//     console.log("Middleware processing request:", event);

//     // Call the next middleware or handler
//     await next();
// };

import { EventProcessor } from '../types';

export class ExampleMiddleware implements EventProcessor {
  process(event: any): any {
    // Process the event
    return {
      ...event,
      // Add any necessary transformations
      timestamp: new Date().toISOString()
    };
  }
}