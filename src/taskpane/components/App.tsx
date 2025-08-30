// src/taskpane/components/App.tsx
import * as React from "react";
import Header from "./Header";
import QueryInput from "./QueryInput";
import ResultsDisplay from "./ResultsDisplay";
import InsertButton from "./InsertButton";
import Spinner from "./Spinner";

/* global Word */

interface AppProps {
  title: string;
}

const App: React.FC<AppProps> = () => {
  // In Phase 1, the spinner is always hidden.
  // We'll wire this up to real state in Phase 2.
  const isSpinnerVisible: boolean = false;

  return (
    <div className="p-4 relative">
      <Header />
      <main>
        <QueryInput />
        {/* In a real app, ResultsDisplay and InsertButton would be conditional */}
        <ResultsDisplay />
        <InsertButton />
      </main>
      <Spinner isVisible={isSpinnerVisible} />
    </div>
  );
};

export default App;