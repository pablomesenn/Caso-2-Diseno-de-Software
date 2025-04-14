// export const exampleHandlerTwo = async (event: any) => {
//     // Import the middleware and repository
//     const { exampleMiddleware } = require('../middleware/exampleMiddleware');
//     const { ExampleRepository } = require('../repository/exampleRepository');

//     // Use the middleware to process the request
//     const processedEvent = exampleMiddleware(event);

//     // Create an instance of the repository
//     const repository = new ExampleRepository();

//     // Perform an operation using the repository
//     const result = await repository.getData(processedEvent);

//     // Return the result
//     return {
//         statusCode: 200,
//         body: JSON.stringify(result),
//     };
// };

import { BaseHandler } from './baseHandler';
import { DataRepository } from '../types';
import { LoggingMiddleware } from '../middleware/loggingMiddleware';

export class GetDataHandler extends BaseHandler {
  constructor(repository: DataRepository) {
    // No mandatory middleware for get operations
    super(repository);
    
    // Only add logging middleware - it's optional
    this.middlewareChain
      .addMiddleware(new LoggingMiddleware());
  }
  
  protected async executeOperation(processedEvent: any): Promise<any> {
    return await this.repository.getData(processedEvent);
  }
}