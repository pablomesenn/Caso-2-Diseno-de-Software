import { DataRepository, HttpResponse, MiddlewareChain } from '../types';
import { MiddlewareChainImpl } from '../middleware/middlewareChain';
import { MiddlewareType } from '../middleware/middlewareTypes';
import { Logger } from '../utils/logger';
import { CloudWatchLogger } from '../utils/cloudwatch-logger';

const logger: Logger = new CloudWatchLogger(process.env.LOG_GROUP_NAME || '/aws/lambda/my-handler', "my-log-stream");

export abstract class BaseHandler {
  protected middlewareChain: MiddlewareChain;
  protected repository: DataRepository;

  constructor(repository: DataRepository, mandatoryMiddlewareTypes: string[] = []) {
    this.repository = repository;
    this.middlewareChain = new MiddlewareChainImpl(mandatoryMiddlewareTypes);
  }

  protected abstract executeOperation(processedEvent: any): Promise<any>;

  protected createSuccessResponse(data: any): HttpResponse {
    return {
      statusCode: 200,
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    };
  }

  protected createErrorResponse(error: Error): HttpResponse {
    return {
      statusCode: error.message.includes('Unauthorized') ? 401 :
                 error.message.includes('Validation') ? 400 : 500,
      body: JSON.stringify({
        message: error.message
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    };
  }
  

  public async handle(event: any): Promise<HttpResponse> {
    try {
      logger.log('info', 'Existing handler started', { event });
      const processedEvent = this.middlewareChain.process(event);
      const result = await this.executeOperation(processedEvent);
      logger.log('info', 'Existing handler started', { event });
      return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Success', data: result })
      };
    } catch (error) {
      return this.createErrorResponse(error as Error);
    }
  }
}   