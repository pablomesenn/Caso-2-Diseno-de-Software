import { Logger } from './logger';
import { CloudWatchLogs } from 'aws-sdk'; // If using AWS SDK directly

export class CloudWatchLogger implements Logger {
    private cloudWatchLogs: CloudWatchLogs;
    private logGroupName: string;
    private logStreamName: string;

    constructor(logGroupName: string, logStreamName: string) {
        this.cloudWatchLogs = new CloudWatchLogs();
        this.logGroupName = logGroupName;
        this.logStreamName = logStreamName;
    }

    async log(level: string, message: string, context?: any): Promise<void> {
        const logEvent = {
            timestamp: Date.now(),
            message: `${level}: ${message} ${context ? JSON.stringify(context) : ''}`
        };

        const params: CloudWatchLogs.PutLogEventsRequest = {
            logEvents: [logEvent],
            logGroupName: this.logGroupName,
            logStreamName: this.logStreamName
        };

        try {
            await this.cloudWatchLogs.putLogEvents(params).promise();
        } catch (error) {
            console.error('Error sending to CloudWatch:', error);
        }
    }
}