import { BaseHandler } from './baseHandler';
import { DataRepository } from '../types';
import { MiddlewareType } from '../middleware/middlewareTypes';

// A base class for handlers that require authentication
export abstract class AuthenticatedHandler extends BaseHandler {
  constructor(repository: DataRepository) {
    // Specify authentication as a mandatory middleware
    super(repository, [MiddlewareType.AUTHENTICATION]);
  }
}