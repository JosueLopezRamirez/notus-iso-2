import React from "react";

const GridButton = ({ title, onClick, icon }) => {
  return (
    <div
      className="mb-2 mr-4 text-blue-600 flex items-center cursor-pointer"
      onClick={onClick}
    >
      {icon}
      <span className="text-sm font-bold">{title}</span>
    </div>
  );
};

export default GridButton;
