import { RepositoryCard } from "./components/RepositoryCard";
import { SearchForm } from "./components/SearchForm";
import type { GitHubRepository } from "./types/github";

const mockRepositoryData: GitHubRepository[] = [
  {
    id: 10270250,
    name: "react",
    full_name: "facebook/react",
    description: "The library for web and native user interfaces.",
    stargazers_count: 240000,
    language: "JavaScript",
    html_url: "https://github.com/facebook/react",
  },
];

function App() {
  // const [repositories, setRepositories] = useState<Repository[]>([]);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState<string | null>(null);

  const handleSearch = (query: string) => {
    console.log(query);
  };

  // useEffect(() => {
  //   async function loadRepositories() {
  //     try {
  //       setLoading(true);

  //       const data = await searchRepositories(query, page);

  //       setRepositories(data.items);
  //     } catch {
  //       setError("Failed to fetch repositories");
  //     } finally {
  //       setLoading(false);
  //     }
  //   }

  //   if (query) {
  //     loadRepositories();
  //   }
  // }, [query, page]);
  return (
    <main className="min-h-screen bg-gray-50 px-4 py-8">
      <div className="mx-auto max-w-3xl flex flex-col items-center gap-4">
        <h1 className="text-3xl font-bold  text-gray-900">
          GitHub Repository Search
        </h1>
        <SearchForm onSearch={handleSearch} />
        {/*  */}

        {mockRepositoryData.map((repo) => {
          return <RepositoryCard repository={repo} />;
        })}
      </div>
    </main>
  );
}

export default App;
