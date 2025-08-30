// src/taskpane/components/InsertButton.tsx
import * as React from "react";

interface InsertButtonProps {}

const InsertButton: React.FC<InsertButtonProps> = () => {
  return (
    <div className="pt-6">
      <button
        type="button"
        className="w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        Insert into Document
      </button>
    </div>
  );
};

export default InsertButton;