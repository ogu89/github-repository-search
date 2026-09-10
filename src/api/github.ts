import type { GitHubSearchResponse } from "../types/github";

const BASE_URL = "https://api.github.com";

export async function fetchRepositories(
  query: string,
  page: number = 1,
  pageSize: number = 10,
): Promise<GitHubSearchResponse> {
  const params = new URLSearchParams({
    q: query,
    page: String(page),
    per_page: String(pageSize),
  });

  const response = await fetch(
    `${BASE_URL}/search/repositories?${params.toString()}`,
    {
      headers: {
        Accept: "application/vnd.github+json",
        "X-GitHub-Api-Version": "2026-03-10",
      },
    },
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch repositories (${response.status})`);
  }

  const data: GitHubSearchResponse = await response.json();

  return data;
}
