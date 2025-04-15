import { DataRepository } from '../types';
import { DBRepository } from './DBRepository';
import { APIRepository } from './APIRepository';

export enum RepositoryType {
  DB = 'db',
  API = 'api'
}

export class RepositoryFactory {
  static createRepository(type: RepositoryType): DataRepository {
    switch (type) {
      case RepositoryType.DB:
        return new DBRepository();
      case RepositoryType.API:
        return new APIRepository();
      default:
        throw new Error(`Unknown repository type: ${type}`);
    }
  }
}
