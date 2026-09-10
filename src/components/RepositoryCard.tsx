import type { GitHubRepository } from "../types/github";

type RepositoryCardProps = {
  repository: GitHubRepository;
};

export function RepositoryCard({ repository }: RepositoryCardProps) {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0 flex-1 wrap-anywhere">
          <a
            href={repository.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-blue-600 hover:underline"
          >
            {repository.full_name}
          </a>

          <p className="mt-2 text-sm text-gray-600">
            {repository.description ?? "No description provided."}
          </p>
        </div>

        <span className="shrink-0 whitespace-nowrap text-sm text-gray-600">
          ⭐ {repository.stargazers_count.toLocaleString()}
        </span>
      </div>

      {repository.language && (
        <div className="mt-3 text-sm text-gray-500">{repository.language}</div>
      )}
    </div>
  );
}
