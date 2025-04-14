import { BaseMiddleware } from './baseMiddleware';
import { MiddlewareType } from './middlewareTypes';

export class LoggingMiddleware extends BaseMiddleware {
    public readonly type = MiddlewareType.LOGGING;
  
    protected processEvent(event: any): any {
        // Log incoming request
        console.log(`[${new Date().toISOString()}] Processing event:`, JSON.stringify(event, null, 2));
        
        return event; // Pass through unchanged
    }
}