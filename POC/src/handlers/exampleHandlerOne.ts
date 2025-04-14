// export const exampleHandlerOne = async (event: any) => {
//     // Import the middleware and repository
//     const { exampleMiddleware } = require('../middleware/exampleMiddleware');
//     const { ExampleRepository } = require('../repository/exampleRepository');

//     // Process the request using the middleware
//     const processedEvent = exampleMiddleware(event);

//     // Create an instance of the repository
//     const repository = new ExampleRepository();

//     // Perform an operation, e.g., saving data
//     const result = await repository.saveData(processedEvent);

//     return {
//         statusCode: 200,
//         body: JSON.stringify({
//             message: 'Data saved successfully',
//             data: result,
//         }),
//     };
// };


// src/handlers/saveDataHandler.ts
import { AuthenticatedHandler } from './authenticatedHandler';
import { DataRepository } from '../types';
import { LoggingMiddleware } from '../middleware/loggingMiddleware';
import { ValidationMiddleware } from '../middleware/validationMiddleware';
import { AuthMiddleware } from '../middleware/authMiddleware';

export class SaveDataHandler extends AuthenticatedHandler {
  constructor(repository: DataRepository) {
    super(repository);
    
    // Define validation schema for save operations
    const saveSchema = {
      requiredFields: ['name', 'data']
    };
    
    // Chain middleware - order matters!
    // 1. Logging (optional)
    // 2. Validation (optional but recommended)
    // 3. Authentication (mandatory - inherited from AuthenticatedHandler)
    this.middlewareChain
      .addMiddleware(new LoggingMiddleware())
      .addMiddleware(new ValidationMiddleware(saveSchema))
      .addMiddleware(new AuthMiddleware());
  }
  
  protected async executeOperation(processedEvent: any): Promise<any> {
    // Access user info from auth middleware
    const { user } = processedEvent;
    
    // Add audit info
    const dataWithAudit = {
      ...processedEvent.body,
      createdBy: user.id,
      createdAt: new Date().toISOString()
    };
    
    const result = await this.repository.saveData(dataWithAudit);
    return {
      message: 'Data saved successfully',
      data: result
    };
  }
}
