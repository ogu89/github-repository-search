export type GitHubRepository = {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  stargazers_count: number;
  language: string | null;
  html_url: string;
};

export type GitHubSearchResponse = {
  total_count: number;
  incomplete_results: boolean;
  items: GitHubRepository[];
};
