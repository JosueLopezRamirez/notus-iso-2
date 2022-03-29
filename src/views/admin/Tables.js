import React, { useEffect, useRef, useState } from "react";

import Grid from "components/Grid";

const columnDefs = [
  { field: "nombre", sortable: true, filter: true },
  { field: "apellido", sortable: true, filter: true },
  {
    field: "fechaNacimiento",
    headerName: "Fecha de Nacimiento",
    sortable: true,
    filter: true,
  },
];

export default function Tables() {
  const [rowData, setRowData] = useState([
    {
      nombre: "Michael",
      apellido: "Garcia",
      fechaNacimiento: "22-10-1995",
    },
    {
      nombre: "Stephanie",
      apellido: "Silva",
      fechaNacimiento: "22-10-1995",
    },
    {
      nombre: "Josue",
      apellido: "Lopez",
      fechaNacimiento: "22-10-1995",
    },
    {
      nombre: "Shoji",
      apellido: "Delgado",
      fechaNacimiento: "22-10-1995",
    },
  ]);
  const gridRef = useRef(null);

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
            // removeRow
          />
          {/* <CardTable /> */}
        </div>
      </div>
    </>
  );
}
