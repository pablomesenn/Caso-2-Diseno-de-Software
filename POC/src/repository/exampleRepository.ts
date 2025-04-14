// class ExampleRepository {
//     private dataStore: any[] = [];

//     getData(): any[] {
//         return this.dataStore;
//     }

//     saveData(data: any): void {
//         this.dataStore.push(data);
//     }
// }

// export default ExampleRepository;

import { DataRepository } from '../types';

export class ExampleRepository implements DataRepository {
  async saveData(data: any): Promise<any> {
    // Implementation for saving data
    return { id: '123', ...data };
  }

  async getData(query: any): Promise<any> {
    // Implementation for retrieving data
    return { id: '123', name: 'Example', ...query };
  }
}

