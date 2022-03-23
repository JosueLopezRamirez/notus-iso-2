import React from "react";

const CardBody = (props) => {
  return (
    <div className="flex-auto px-4 lg:px-10 py-10 pt-0">{props.children}</div>
  );
};

export default CardBody;
