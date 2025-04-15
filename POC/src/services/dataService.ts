import { DataRepository } from '../types';
import { RepositoryFactory, RepositoryType } from '../repository/RepositoryFactory';

// The DataService acts as a facade to any repository implementation.
// It can contain transformation logic, validations, or choose which repository to use.
export class DataService {
  private repository: DataRepository;

  constructor(repositoryType: RepositoryType) {
    this.repository = RepositoryFactory.createRepository(repositoryType);
  }

  async saveData(data: any): Promise<any> {
    // Insert any business-specific logic or validation here.
    return await this.repository.saveData(data);
  }

  async getData(query: any): Promise<any> {
    return await this.repository.getData(query);
  }
}