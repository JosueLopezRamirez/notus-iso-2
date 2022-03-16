import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

export const RemoveRenderer = (props) => {
  const onClick = () => {
    let deletedRow = props.node.data;
    props.api.applyTransaction({ remove: [deletedRow] });
  };
  return (
    <div className="flex items-center justify-center w-full h-full">
      <button onClick={onClick}>
        <DeleteIcon />
      </button>
    </div>
  );
};
