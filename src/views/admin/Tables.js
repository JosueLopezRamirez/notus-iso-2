import React, { useEffect, useMemo, useState } from "react";

// components

import CardTable from "components/Cards/CardTable.js";
import { Grid } from "components/Grid";

const columnDefs = [
  { field: "selection",headerName: '', minWidth: 30, width: 35, checkboxSelection: true },
  { field: "make", sortable: true, filter: true },
  { field: "model", sortable: true, filter: true },
  { field: "price", sortable: true, filter: true },
];

export default function Tables() {
  const [rowData, setRowData] = useState([]);

  useEffect(() => {
    fetch("https://www.ag-grid.com/example-assets/row-data.json")
      .then((result) => result.json())
      .then((rowData) => setRowData(rowData));
  }, []);

  const autoGroupColumnDef = useMemo(
    () => ({
      field: "model", // show model in group column at leaf levels
      cellRendererParams: {
        checkbox: true, // put in checkbox selection in group column
      },
    }),
    []
  );

  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <Grid
            rowData={rowData}
            columnDefs={columnDefs}
            groupSelectsChildren={true}
            autoGroupColumnDef={autoGroupColumnDef}
            removeRow
            height={800}
          />
          {/* <CardTable /> */}
        </div>
      </div>
    </>
  );
}
