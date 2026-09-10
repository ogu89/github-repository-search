type PaginationProps = {
  page: number;
  totalPages: number;
  pageSize: number;
  loading: boolean;
  onPageChange: (page: number) => void;
  onPageSizeChange: (pageSize: number) => void;
};

export function Pagination({
  page,
  totalPages,
  pageSize,
  loading,
  onPageChange,
  onPageSizeChange,
}: PaginationProps) {
  if (totalPages === 0) return null;

  return (
    <nav
      aria-label="Repository pagination"
      className="flex flex-wrap items-center justify-center gap-4"
    >
      <div className="flex items-center gap-3">
        <button
          type="button"
          disabled={loading || page <= 1}
          onClick={() => onPageChange(page - 1)}
          className="rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-blue-500 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Previous
        </button>
        <span className="text-sm text-gray-600">
          Page {page} of {totalPages}
        </span>
        <button
          type="button"
          disabled={loading || page >= totalPages}
          onClick={() => onPageChange(page + 1)}
          className="rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-blue-500 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Next
        </button>
      </div>

      <div>
        <label htmlFor="page-size" className="sr-only">
          Repositories per page
        </label>
        <select
          id="page-size"
          value={pageSize}
          disabled={loading}
          onChange={(event) => onPageSizeChange(Number(event.target.value))}
          className="rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-700 disabled:opacity-50"
        >
          <option value={10}>10 per page</option>
          <option value={25}>25 per page</option>
          <option value={50}>50 per page</option>
          <option value={100}>100 per page</option>
        </select>
      </div>
    </nav>
  );
}
