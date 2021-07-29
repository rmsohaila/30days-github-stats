import { IRepositoryOwner } from './IRepositoryOwner';

export interface IRepository {
  name: string;
  description: string;
  url: string;
  starsCount: number;
  issuesCount: number;
  createdAt: Date;
  owner: IRepositoryOwner;
}
