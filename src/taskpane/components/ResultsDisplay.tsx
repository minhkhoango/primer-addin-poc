// src/taskpane/components/ResultsDisplay.tsx
import * as React from "react";
import type { AnalysisResult } from "../../api/mockApi";

interface ResultsDisplayProps {
    results: AnalysisResult | null;
}

const ResultsDisplay: React.FC<ResultsDisplayProps> = ({ results}) => {
    if (!results) {
        return null;
    }

    return (
        <div className="space-y-4 pt-6">
        <div>
            <h3 className="text-lg font-semibold text-gray-800">Summary</h3>
            <p className="mt-1 text-sm text-gray-600 bg-gray-50 p-3 rounded-md border">
            {results.summary}
            </p>
        </div>
        <div>
            <h3 className="text-lg font-semibold text-gray-800">Citations</h3>
            <ul className="mt-1 space-y-2">
            {results.citations.map((citation) => (
                <li key={citation.id} className="text-sm text-gray-600 bg-gray-50 p-3 rounded-md border">
                <p className="font-semibold text-gray-700">
                    Source: {citation.sourceDocument}
                </p>
                <p className="italic">"{citation.text}"</p>
                </li>
            ))}
            </ul>
        </div>
        </div>
    );
};

export default ResultsDisplay;