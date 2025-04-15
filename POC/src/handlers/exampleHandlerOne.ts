// Responsible for handling request related to saving data

import { SaveDataHandler } from './data/saveDataHandler';
import { DataService } from '../services/dataService';
import { RepositoryType } from '../repository/RepositoryFactory';

// Instantiate the service with the desired repository type.
// For example, RepositoryType.DB or RepositoryType.API.
const dataService = new DataService(RepositoryType.DB);

const saveDataHandler = new SaveDataHandler(dataService);

export const saveData = async (event: any) => {
  return await saveDataHandler.handle(event);
};