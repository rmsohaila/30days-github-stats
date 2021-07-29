import { IRepositoryOwner } from './IRepositoryOwner';

export interface IRepository {
  name: String;
  description: String;
  url: String;
  starsCount: Number;
  issuesCount: Number;
  createdAt: Date;
  owner: IRepositoryOwner;
}
