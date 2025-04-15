// Responsible for handling request related to gettting data
import { GetDataHandler } from './data/getDataHandler';
import { DataService } from '../services/dataService';
import { RepositoryType } from '../repository/RepositoryFactory';

// Instantiate the service with the desired repository type.
// For example, RepositoryType.DB or RepositoryType.API.
const dataService = new DataService(RepositoryType.DB);

const getDataHandler = new GetDataHandler(dataService);

export const getData = async (event: any) => {
  return await getDataHandler.handle(event);
};