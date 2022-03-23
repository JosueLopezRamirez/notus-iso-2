import React, { useEffect, useRef, useState } from "react";

import CardTable from "components/Cards/CardTable.js";
import Grid from "components/Grid";

const columnDefs = [
  { field: "make", sortable: true, filter: true },
  { field: "model", sortable: true, filter: true },
  { field: "price", sortable: true, filter: true },
  { field: "price2", sortable: true, filter: true },
  { field: "price3", sortable: true, filter: true },
  { field: "price4", sortable: true, filter: true },
];

export default function Tables() {
  const [rowData, setRowData] = useState([]);
  const gridRef = useRef(null);

  useEffect(() => {
    fetch("https://www.ag-grid.com/example-assets/row-data.json")
      .then((result) => result.json())
      .then((rowData) =>
        setRowData(
          rowData.splice(0, 25).map((row) => ({
            ...row,
            price2: 32000,
            price3: 32000,
            price4: 32000,
          }))
        )
      );
  }, []);

  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4 flex justify-center items-center">
          <Grid
            ref={gridRef}
            rowData={rowData}
            columnDefs={columnDefs}
            onSave={() => {
              const rows = gridRef.current.getRows();
              console.log({ rows });
            }}
            removeRow
          />
          {/* <CardTable /> */}
        </div>
      </div>
    </>
  );
}
