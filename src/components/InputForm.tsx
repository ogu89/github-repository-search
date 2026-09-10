import { useState } from "react";

type InputFormProps = {
  onSearch: (query: string) => void;
};

export function InputForm({ onSearch }: InputFormProps) {
  const [searchInput, setSearchInput] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const query = searchInput.trim();
    if (!query) return;
    onSearch(query);
  };

  return (
    <form className="mx-auto max-w-md" onSubmit={handleSubmit}>
      <label htmlFor="search" className="sr-only">
        Search repositories
      </label>

      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <svg
            className="h-4 w-4 text-gray-400"
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="2"
              d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>

        <input
          type="search"
          id="search"
          value={searchInput}
          className="block w-full rounded-lg border border-gray-300 bg-white p-3 pl-9 pr-24 text-sm text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
          placeholder="Search repositories..."
          required
          onChange={(event) => setSearchInput(event.target.value)}
        />

        <button
          type="submit"
          className="absolute bottom-1.5 right-1.5 rounded-md bg-blue-600 px-4 py-1.5 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Search
        </button>
      </div>
    </form>
  );
}
