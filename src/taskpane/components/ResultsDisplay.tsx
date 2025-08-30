// src/taskpane/components/ResultsDisplay.tsx
import * as React from "react";

interface ResultsDisplayProps {}

const ResultsDisplay: React.FC<ResultsDisplayProps> = () => {
  const staticResults = {
    summary:
      "Analysis indicates a significant increase in naval patrols by the People's Liberation Army Navy (PLAN) in the Spratly Islands over the past 72 hours. Satellite imagery confirms the presence of at least two Luyang III-class destroyers and a support vessel. This activity coincides with heightened diplomatic rhetoric from Beijing regarding territorial claims.",
    citations: [
      {
        id: 1,
        sourceDocument: "INT-REP-00A4",
        text: "Satellite imagery from 0400Z confirms two Type 052D destroyers...",
      },
      {
        id: 2,
        sourceDocument: "SIGINT-TH-2B11",
        text: "...increased chatter volume detected on secured channels originating from the Hainan naval base...",
      },
      {
        id: 3,
        sourceDocument: "STATE-DIP-CABLE-98C",
        text: "Official statement from Foreign Ministry spokesperson asserts 'indisputable sovereignty' over the region.",
      },
    ],
  };

  return (
    <div className="space-y-4 pt-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-800">Summary</h3>
        <p className="mt-1 text-sm text-gray-600 bg-gray-50 p-3 rounded-md border">
          {staticResults.summary}
        </p>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-800">Citations</h3>
        <ul className="mt-1 space-y-2">
          {staticResults.citations.map((citation) => (
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