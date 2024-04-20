export interface Repository {
    id: number;
    name: string;
    full_name: string;
    owner: {
      id: number;
      avatar_url: string;
      html_url: string;
      login: string;
    };
    html_url: string;
    description: string;
    stargazers_count: number;
    watchers_count: number;
    language: string;
  }