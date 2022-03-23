import React from "react";

const Card = (props) => {
  return (
    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-slate-100 border-0">
      {props.children}
    </div>
  );
};

export default Card;
