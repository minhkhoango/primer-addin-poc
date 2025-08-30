// src/taskpane/components/Spinner.tsx
import * as React from "react";

interface SpinnerProps {
  isVisible: boolean;
}

const Spinner: React.FC<SpinnerProps> = ({ isVisible }) => {
  if (!isVisible) {
    return null;
  }

  return (
    <div className="absolute inset-0 bg-white bg-opacity-75 flex items-center justify-center">
      <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
    </div>
  );
};

export default Spinner;