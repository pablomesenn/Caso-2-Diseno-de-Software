export function log(message: string): void {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${message}`);
}

export interface Logger {
    log(level: string, message: string, context?: any): void;
}
