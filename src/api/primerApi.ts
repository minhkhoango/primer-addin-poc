// src/api/primerApi.ts
import type { AnalysisResult } from "./mockApi";

// The real, production-grade function for getting analysis.
// This demonstrates knowledge of secure, token-based authentication within an Office Add-in.
export const getRealAnalysis = async (query: string): Promise<AnalysisResult> => {
  const placeholderUrl = "https://primer.accredited-server.gov/api/v1/analyze";

  try {
    // 1. Get the single sign-on (SSO) token from the Office host.
    // This token proves the user's identity and is the cornerstone of a secure integration.
    const accessToken = await OfficeRuntime.auth.getAccessToken();

    // 2. Make the authenticated fetch request.
    const response = await fetch(placeholderUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`, // The critical piece for enterprise security
      },
      body: JSON.stringify({ query: query }),
    });

    if (!response.ok) {
      // Handle non-200 responses from the server (e.g., 401, 403, 500).
      throw new Error(`API request failed with status: ${response.status}`);
    }

    // 3. Parse and return the strongly-typed result.
    const data: AnalysisResult = await response.json();
    return data;
  } catch (error) {
    // This catches both network errors and the thrown error from a bad response.
    console.error("Real API call failed:", error);
    // In a real app, you'd have more robust error handling or logging here.
    throw error; // Re-throw the error to be handled by the caller.
  }
};