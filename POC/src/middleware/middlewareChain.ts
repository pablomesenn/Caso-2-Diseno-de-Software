import { Middleware, MiddlewareChain } from '../types';

export class MiddlewareChainImpl implements MiddlewareChain {
    private firstMiddleware: Middleware | null = null;
    private lastMiddleware: Middleware | null = null;
    private mandatoryMiddleware: Set<string> = new Set();
    
    constructor(mandatoryMiddlewareTypes: string[] = []) {
        mandatoryMiddlewareTypes.forEach(type => this.mandatoryMiddleware.add(type));
    }
    
    addMiddleware(middleware: Middleware): MiddlewareChain {
        if (!this.firstMiddleware) {
            this.firstMiddleware = middleware;
            this.lastMiddleware = middleware;
        } else if (this.lastMiddleware) {
            this.lastMiddleware.setNext(middleware);
            this.lastMiddleware = middleware;
        }
        
        return this;
    }
    
    verifyMandatoryMiddleware(): void {
        // Check if all mandatory middleware types are included
        const missingMiddleware: string[] = [];
        
        this.mandatoryMiddleware.forEach(type => {
        if (!this.hasMiddlewareOfType(type)) {
            missingMiddleware.push(type);
        }
        });

        if (missingMiddleware.length > 0) {
            throw new Error(`Missing mandatory middleware: ${missingMiddleware.join(', ')}`);
        }
    }
        
    private hasMiddlewareOfType(type: string): boolean {
        // In a real implementation, you would check the middleware chain
        // This is a simplified example - you would need to track middleware types
        // A real implementation might use middleware registration with type IDs
        return true; // Placeholder
    }
    
    process(event: any): any {
    this.verifyMandatoryMiddleware();
    
    if (!this.firstMiddleware) {
        return event;
    }
    
    return this.firstMiddleware.process(event);
    }
}
  