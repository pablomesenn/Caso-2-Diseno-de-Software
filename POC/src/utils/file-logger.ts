import { Logger } from './logger';
import * as fs from 'fs';
import * as path from 'path';

export class FileLogger implements Logger {
    private logFilePath: string;

    constructor(logDirectory: string) {
        this.logFilePath = path.join(logDirectory, 'app.log');
    }

    log(level: string, message: string, context?: any): void {
        const logEntry = `${new Date().toISOString()} - ${level}: ${message} ${context ? JSON.stringify(context) : ''}\n`;
        fs.appendFileSync(this.logFilePath, logEntry);
    }
}