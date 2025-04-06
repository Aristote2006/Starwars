import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center h-40">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-star-wars-yellow"></div>
    </div>
  );
};

export default LoadingSpinner;