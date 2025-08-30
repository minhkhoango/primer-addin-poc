// src/taskpane/components/QueryInput.tsx
import * as React from "react";

interface QueryInputProps {
  query: string;
  setQuery: (query: string) => void;
  handleAnalyze: () => void;
  isLoading: boolean;
}

const QueryInput: React.FC<QueryInputProps> = ({ query, setQuery, handleAnalyze, isLoading }) => {
  return (
    <div className="space-y-3">
      <label htmlFor="query" className="block text-sm font-medium text-gray-700">
        Analyst Query
      </label>
      <textarea
        id="query"
        rows={4}
        className="block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm p-2"
        placeholder="Enter your natural language query here..."
        value={query} // Switched from defaultValue to value
        onChange={(e) => setQuery(e.target.value)}
        disabled={isLoading} // Disable input while loading
      />
      <button
        type="button"
        className="w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        onClick={handleAnalyze}
        disabled={isLoading || query.trim() === ""} // Disable button while loading or if input is empty
      >
        {isLoading ? "Analyzing..." : "Analyze"}
      </button>
    </div>
  );
};

export default QueryInput;