import { InputForm } from "./components/InputForm";

function App() {
  const handleSearch = (query: string) => {
    console.log(query);
  };
  return (
    <main className="min-h-screen bg-gray-50 px-4 py-8">
      <div className="mx-auto max-w-3xl flex flex-col items-center gap-4">
        <h1 className="text-3xl font-bold  text-gray-900">
          GitHub Repository Search
        </h1>
        <InputForm onSearch={handleSearch} />
      </div>
    </main>
  );
}

export default App;
