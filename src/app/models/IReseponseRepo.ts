export interface IResponseRepo {
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  open_issues_count: number;
  created_at: Date;
  owner: {
    avatar_url: string;
    login: string;
  };
}
