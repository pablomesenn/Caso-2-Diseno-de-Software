import { Middleware } from '../types';

export abstract class BaseMiddleware implements Middleware {
    private nextMiddleware: Middleware | null = null;
  
    setNext(middleware: Middleware): Middleware {
        this.nextMiddleware = middleware;
        return middleware;
    }
  
    process(event: any): any {
        const processedEvent = this.processEvent(event);
        
        if (this.nextMiddleware) {
        return this.nextMiddleware.process(processedEvent);
        }
        
        return processedEvent;
    }

    protected abstract processEvent(event: any): any;
}   