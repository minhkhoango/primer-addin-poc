// src/taskpane/components/App.tsx
import * as React from "react";
import Header from "./Header";
import QueryInput from "./QueryInput";
import ResultsDisplay from "./ResultsDisplay";
import InsertButton from "./InsertButton";
import Spinner from "./Spinner";
import { getAnalysis } from "../../api/mockApi";
import type { AnalysisResult } from "../../api/mockApi";

/* global Word, Office */

const App: React.FC = () => {
  // --- STATE MANAGEMENT ---
  // The single source of truth for the application's state.
  const [query, setQuery] = React.useState<string>("");
  const [results, setResults] = React.useState<AnalysisResult | null>(null);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string | null>(null);

  // --- EVENT HANDLERS ---

  const handleAnalyze = async (): Promise<void> => {
    setIsLoading(true);
    setError(null);
    setResults(null); // Clear previous results

    try {
      const analysisResults = await getAnalysis(query);
      setResults(analysisResults);
    } catch (e) {
      // Basic error handling. Good enough for the MVP.
      setError("An unexpected error occurred during analysis.");
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

const handleInsert = async (): Promise<void> => {
    if (!results) return; // Guard clause

    // This is the core Office.js integration for this feature.
    await Word.run(async (context) => {
      const body = context.document.body;
      body.insertParagraph("Primer Fusion Analysis:", Word.InsertLocation.end);
      body.insertParagraph("", Word.InsertLocation.end); // Spacer



  // Insert Summary (bold only the label)
  const summaryLabel = body.insertParagraph("Summary:", Word.InsertLocation.end);
  summaryLabel.font.set({ bold: true });
  const summaryText = body.insertText(results.summary, Word.InsertLocation.end);
  summaryText.font.set({ bold: false });
  body.insertParagraph("", Word.InsertLocation.end); // Spacer


      // Insert Citations (bold only the label)
      const citationsLabel = body.insertParagraph("Citations:", Word.InsertLocation.end);
      citationsLabel.font.set({ bold: true });
      results.citations.forEach((citation) => {
        const citationText = `Source: ${citation.sourceDocument}\n"${citation.text}"\n`;
        const citationRange = body.insertText(citationText, Word.InsertLocation.end);
        citationRange.font.set({ bold: false });
      });

      await context.sync();
    }).catch((e) => {
      console.error("Word.run error:", e);
    });
  };

  return (
    <div className="p-4 relative min-h-screen">
      <Header />
      <main>
        <QueryInput query={query} setQuery={setQuery} handleAnalyze={handleAnalyze} isLoading={isLoading} />

        {/* Conditional Rendering Logic */}
        {error && <div className="text-red-600 mt-4 text-center">{error}</div>}
        
        <ResultsDisplay results={results} />
        
        <InsertButton handleInsert={handleInsert} results={results} isLoading={isLoading} />
      </main>

      {/* The spinner now appears based on the isLoading state */}
      <Spinner isVisible={isLoading} />
    </div>
  );
};

export default App;