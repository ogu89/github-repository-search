import type { GitHubRepository } from "../types/github";
import { RepositoryCard } from "./RepositoryCard";

type RepositoryListProps = {
  repositories: GitHubRepository[];
};

export function RepositoryList({ repositories }: RepositoryListProps) {
  return (
    <ul className="w-full space-y-4">
      {repositories.map((repository) => (
        <li key={repository.id}>
          <RepositoryCard repository={repository} />
        </li>
      ))}
    </ul>
  );
}
