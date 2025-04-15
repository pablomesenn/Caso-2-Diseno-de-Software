import { BaseHandler } from './baseHandler';
import { Logger } from '../utils/logger';

// Mock the logger
const mockLogger: Logger = {
    log: jest.fn()
};

describe('ExistingHandler', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should return a successful response', async () => {
        const event = { /* Mock event data */ };
        const context = {};

        
        // Assert on response body
        expect(mockLogger.log).toHaveBeenCalledTimes(2); // Check logger calls
    });

    it('should handle errors correctly', async () => {
        const event = { /* Mock event data */ };
        const context = {};

        
        // Assert on error response
        expect(mockLogger.log).toHaveBeenCalledTimes(1); // Check logger calls
    });
});