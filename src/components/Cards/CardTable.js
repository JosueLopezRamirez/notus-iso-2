import React from "react";
import PropTypes from "prop-types";

// components
import Table from "components/Table";

const columns = [
  {
    header: "Name",
    accessor: "name",
  },
  {
    header: "Last name",
    accessor: "lastname",
  },
  {
    header: "Role",
    accessor: "role",
  },
  {
    header: "Status",
    accessor: "status",
  },
  {
    header: "Progress",
    accessor: "progress",
  },
];

const data = Array(15).fill({
  name: "Maximo Decimo",
  lastname: "Meridio",
  role: "Comandante",
  status: "Activo",
  progress: "90%"
})

export default function CardTable({ color }) {
  return (
    <>
      <div
        className={
          "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
          (color === "light" ? "bg-white" : "bg-lightBlue-900 text-white")
        }
      >
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3
                className={
                  "font-semibold text-lg " +
                  (color === "light" ? "text-blueGray-700" : "text-white")
                }
              >
                Card Tables
              </h3>
            </div>
          </div>
        </div>
        <Table color={color} columns={columns} data={data} />
      </div>
    </>
  );
}

CardTable.defaultProps = {
  color: "light",
};

CardTable.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};
