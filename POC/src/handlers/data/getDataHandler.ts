import { BaseHandler } from '../base/baseHandler';
import { LoggingMiddleware } from '../../middleware/loggingMiddleware';
import { DataService } from '../../services/dataService';

export class GetDataHandler extends BaseHandler {
  private dataService: DataService;

  constructor(dataService: DataService) {
    super();
  
    this.dataService = dataService;
    
    // Add middleware for logging
    this.middlewareChain.addMiddleware(new LoggingMiddleware());
  }
  
  protected async executeOperation(processedEvent: any): Promise<any> {
    return await this.dataService.getData(processedEvent);
  }
}