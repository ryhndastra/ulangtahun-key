"use client";

import { Play, RotateCcw } from "lucide-react";

export function Button({
  children,
  onClick,
  disabled = false,
  size = "default",
  className = "",
  ...props
}) {
  const sizeClasses = {
    sm: "px-2 py-1 text-xs",
    default: "px-3 py-1.5 text-sm",
    lg: "px-4 py-2 text-base",
  };

  const baseClasses = `
    inline-flex items-center justify-center rounded-md font-medium 
    transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 
    focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 
    disabled:pointer-events-none ring-offset-background
    hover:shadow-md active:scale-95
  `;

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

// Example usage of the updated Button component
function ExampleComponent({
  currentPage,
  wishes,
  pageFlipping,
  bookAnimating,
  changePage,
  toggleBook,
  startCakeAnimation,
  resetCake,
}) {
  return (
    <div>
      {/* Navigation Controls */}
      <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-3">
        <Button
          size="sm"
          onClick={() => changePage("prev")}
          disabled={currentPage === 0 || pageFlipping}
          className="bg-amber-600 hover:bg-amber-700 text-white rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 disabled:opacity-50 font-serif"
        >
          ← Prev
        </Button>
        <Button
          size="sm"
          onClick={toggleBook}
          disabled={bookAnimating}
          className="bg-red-600 hover:bg-red-700 text-white rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 font-serif"
        >
          📖 Tutup
        </Button>
        <Button
          size="sm"
          onClick={() => changePage("next")}
          disabled={currentPage === wishes.length - 1 || pageFlipping}
          className="bg-amber-600 hover:bg-amber-700 text-white rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 disabled:opacity-50 font-serif"
        >
          Next →
        </Button>
      </div>

      {/* Cake Controls */}
      <div className="flex space-x-1">
        <Button
          size="sm"
          onClick={startCakeAnimation}
          className="bg-green-500 hover:bg-green-600 text-white text-xs"
        >
          <Play className="w-3 h-3 mr-1" />
          Ulang
        </Button>
        <Button
          size="sm"
          onClick={resetCake}
          className="bg-gray-500 hover:bg-gray-600 text-white text-xs"
        >
          <RotateCcw className="w-3 h-3 mr-1" />
          Reset
        </Button>
      </div>
    </div>
  );
}
