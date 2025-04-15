import { AuthenticatedHandler } from '../base/authenticatedHandler';
import { DataRepository } from '../../types';
import { LoggingMiddleware } from '../../middleware/loggingMiddleware';
import { ValidationMiddleware } from '../../middleware/validationMiddleware';
import { AuthMiddleware } from '../../middleware/authMiddleware';
import { DataService } from '../../services/dataService';

export class SaveDataHandler extends AuthenticatedHandler {
  private dataService: DataService;

  // Now, inject the DataService directly.
  constructor(dataService: DataService) {
    // Pass a dummy value to the parent if needed or refactor base handler
    super();
    this.dataService = dataService;
    
    const saveSchema = {
      requiredFields: ['name', 'data']
    };

    this.middlewareChain
      .addMiddleware(new LoggingMiddleware())
      .addMiddleware(new ValidationMiddleware(saveSchema))
      .addMiddleware(new AuthMiddleware());
  }
  
  protected async executeOperation(processedEvent: any): Promise<any> {
    const { user } = processedEvent;
    const dataWithAudit = {
      ...processedEvent.body,
      createdBy: user.id,
      createdAt: new Date().toISOString()
    };
    
    const result = await this.dataService.saveData(dataWithAudit);
    return {
      message: 'Data saved successfully',
      data: result
    };
  }
}