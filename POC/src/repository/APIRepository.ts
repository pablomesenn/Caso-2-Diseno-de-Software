import { DataRepository } from '../types';

export class APIRepository implements DataRepository {
  async saveData(data: any): Promise<any> {
    console.log('Saving data using external API');
    return { ...data, source: 'api' };
  }
  async getData(query: any): Promise<any> {
    console.log('Getting data from external API');
    return { query, source: 'api' };
  }
}
