import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="flex justify-center mt-6 space-x-2">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`px-4 py-2 rounded ${
          currentPage === 1
            ? "bg-gray-600 cursor-not-allowed"
            : "bg-star-wars-yellow text-black hover:bg-yellow-400"
        }`}
      >
        Previous
      </button>
      <span className="px-4 py-2 bg-star-wars-space rounded">
        Page {currentPage} of {totalPages}
      </span>
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`px-4 py-2 rounded ${
          currentPage === totalPages
            ? "bg-gray-600 cursor-not-allowed"
            : "bg-star-wars-yellow text-black hover:bg-yellow-400"
        }`}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;