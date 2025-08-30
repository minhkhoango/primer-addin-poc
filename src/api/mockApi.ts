// src/api/mockApi.ts

export interface Citation {
  id: number;
  sourceDocument: string;
  text: string;
}

export interface AnalysisResult {
  summary: string;
  citations: Citation[];
}

// This function simulates a network call to the Primer backend.
export const getAnalysis = async (query: string): Promise<AnalysisResult> => {
  console.log(`Mock API called with query: "${query}"`);

  // Simulate a 2-second network delay. Don't make it instant.
  // The delay is part of the user experience; it makes the result feel earned.
  await new Promise((resolve) => setTimeout(resolve, 2000));

  // In a real app, you might have different canned responses based on the query.
  // For this MVP, one realistic, hardcoded response is all we need.
  const mockResult: AnalysisResult = {
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

  return mockResult;
};