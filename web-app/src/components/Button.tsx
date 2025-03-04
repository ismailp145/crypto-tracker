import React from "react";

interface ButtonProps {
  text: string;
  onClick: () => void;
  isLoading?: boolean;
}

const Button: React.FC<ButtonProps> = ({ text, onClick, isLoading = false }) => {
  return (
    <button
      onClick={onClick}
      disabled={isLoading}
      className="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 disabled:bg-gray-500"
    >
      {isLoading ? "Loading..." : text}
    </button>
  );
};

export default Button;
