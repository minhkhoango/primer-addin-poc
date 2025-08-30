// src/taskpane/components/InsertButton.tsx
import * as React from "react";

interface InsertButtonProps {
    handleInsert: () => void;
    results: object | null;
    isLoading: boolean;
}

const InsertButton: React.FC<InsertButtonProps> = ({ handleInsert, results, isLoading }) => {
    // Don't show the button if there are no results to insert.
  if (!results) {
    return null;
  }

  return (
    <div className="pt-6">
      <button
        type="button"
        className="w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        onClick={handleInsert}
        disabled={isLoading}
      >
        Insert into Document
      </button>
    </div>
  );
};

export default InsertButton;