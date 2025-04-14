export interface EventProcessor {
    process(event: any): any;
}
  
export interface DataRepository {
    saveData(data: any): Promise<any>;
    getData(query: any): Promise<any>;
}

export interface HttpResponse {
    statusCode: number;
    body: string;
    headers?: Record<string, string>;
}

//Middleware chain interfaces
export interface Middleware {
    setNext(middleware: Middleware): Middleware;
    process(event: any): any;
  }
  
  export interface MiddlewareChain {
    addMiddleware(middleware: Middleware): MiddlewareChain;
    process(event: any): any;
  }
