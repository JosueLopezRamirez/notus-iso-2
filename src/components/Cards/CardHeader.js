import React from "react";

const CardHeader = ({ title }) => {
  return (
    <div className="rounded-t bg-white mb-0 px-6 py-4">
      <div className="text-center flex justify-between">
        <h6 className="text-slate-700 text-xl font-bold uppercase mb-0">{title}</h6>
      </div>
    </div>
  );
};

export default CardHeader;
