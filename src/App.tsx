import { useEffect, useState } from "react";
import { RepositoryList } from "./components/RepositoryList";
import { SearchForm } from "./components/SearchForm";
import { Pagination } from "./components/Pagination";
import type { GitHubRepository } from "./types/github";
import { fetchRepositories } from "./api/github";

export default function App() {
  const [query, setQuery] = useState("");
  const [repositories, setRepositories] = useState<GitHubRepository[]>([]);
  const [totalCount, setTotalCount] = useState<number>(0);

  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  // github search only lets us retrieve the first 1000 matches.
  const totalPages = Math.ceil(Math.min(totalCount, 1000) / pageSize);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = (query: string) => {
    console.log(query);
    setQuery(query);
    setPage(1);
  };

  const handlePageSizeChange = (newPageSize: number) => {
    setPageSize(newPageSize);
    setPage(1);
  };

  useEffect(() => {
    if (!query) return;
    // Prevent outdated requests from overwriting the latest search results.
    let ignore = false;

    async function loadRepositories() {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchRepositories(query, page, pageSize);
        if (!ignore) {
          setRepositories(data.items);
          setTotalCount(data.total_count);
        }
      } catch (error) {
        if (!ignore) {
          setError(
            error instanceof Error
              ? error.message
              : "Failed to fetch repositories",
          );
        }
      } finally {
        if (!ignore) {
          setLoading(false);
        }
      }
    }

    loadRepositories();

    return () => {
      ignore = true;
    };
  }, [query, page, pageSize]);

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-8">
      <div className="mx-auto max-w-3xl flex flex-col items-center gap-4">
        <h1 className="text-3xl font-bold  text-gray-900">
          GitHub Repository Search
        </h1>
        <SearchForm onSearch={handleSearch} />

        {!query && (
          <p className="text-gray-500">
            Search for repositories to get started.
          </p>
        )}
        {loading && (
          <p role="status" className="text-gray-500">
            Loading repositories...
          </p>
        )}
        {error && (
          <p role="alert" className="text-red-600">
            {error}
          </p>
        )}

        {query && !loading && !error && (
          <>
            <p className="text-sm text-gray-600">
              {totalCount.toLocaleString()} repositories found for{" "}
              <span className="font-medium text-gray-900">“{query}”</span>
            </p>

            {repositories.length > 0 ? (
              <RepositoryList repositories={repositories} />
            ) : (
              <p className="text-gray-500">No repositories found.</p>
            )}

            <Pagination
              page={page}
              totalPages={totalPages}
              pageSize={pageSize}
              loading={loading}
              onPageChange={setPage}
              onPageSizeChange={handlePageSizeChange}
            />
          </>
        )}
      </div>
    </main>
  );
}
