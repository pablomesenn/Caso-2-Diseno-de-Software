import { DataRepository } from '../types';

export class DBRepository implements DataRepository {
  async saveData(data: any): Promise<any> {
    console.log('Saving data to the database');
    return { ...data, source: 'db' };
  }
  async getData(query: any): Promise<any> {
    console.log('Getting data from the database');
    return { query, source: 'db' };
  }
}
