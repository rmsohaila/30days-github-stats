export interface IResponseRepo {
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  open_issues: number;
  created_at: Date;
  owner: {
    avatar: string;
    login: string;
  };
}
