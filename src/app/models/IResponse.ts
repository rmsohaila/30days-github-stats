import { IResponseRepo } from './IReseponseRepo';

export interface IResponse {
  total_count: number;
  incomplete_results: boolean;
  items: IResponseRepo[];
}
