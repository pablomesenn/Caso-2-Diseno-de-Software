import { BaseMiddleware } from './baseMiddleware';
import { MiddlewareType } from './middlewareTypes';

export class ValidationMiddleware extends BaseMiddleware {
    public readonly type = MiddlewareType.VALIDATION;
    private schema: any;
  
    constructor(schema: any) {
        super();
        this.schema = schema;
    }
  
    protected processEvent(event: any): any {
        // Validate event against schema
        // In a real implementation, you would use a validation library like Joi or Zod
    
        // Simple validation example
        if (this.schema.requiredFields) {
            for (const field of this.schema.requiredFields) {
                if (!event.body || event.body[field] === undefined) {
                throw new Error(`Validation error: Missing required field '${field}'`);
                }
            }
        }
    
        return event;
    }
}
