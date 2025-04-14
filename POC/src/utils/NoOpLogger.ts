import { Logger } from './logger';

export class NoOpLogger implements Logger {
    log(level: string, message: string, context?: any): void {
        // Do nothing
    }
}