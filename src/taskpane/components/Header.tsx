// src/taskpane/components/Header.tsx
import * as React from "react";

// No props needed for this static component, but we define the type for consistency.
// Pylance strict mode demands it. No half-measures.
interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <header className="pb-4">
      <div className="flex items-center space-x-2">
        {/* Placeholder for a logo - an SVG or img tag would go here */}
        <div className="w-8 h-8 bg-blue-600 rounded"></div>
        <h1 className="text-2xl font-bold text-gray-800">Primer Fusion</h1>
      </div>
      <p className="text-sm text-gray-500 mt-1">
        Your mission-critical intelligence connector.
      </p>
    </header>
  );
};

export default Header;