import { useState } from "react";
import type { GitHubRepository } from "../types/github";

type RepositoryCardProps = {
  repository: GitHubRepository;
};

export function RepositoryCard({ repository }: RepositoryCardProps) {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <a
            href={repository.html_url}
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-blue-600 hover:underline"
          >
            {repository.full_name}
          </a>

          <p className="mt-2 text-sm text-gray-600">{repository.description}</p>
        </div>

        <span className="text-sm text-gray-600">
          ⭐ {repository.stargazers_count}
        </span>
      </div>

      <div className="mt-3 text-sm text-gray-500">{repository.language}</div>
    </div>
  );
}
