import { AgGridReact } from "ag-grid-react";
import React, { useCallback, useMemo, useRef } from "react";
import { RemoveRenderer } from "./RemoveRenderer";

const removeRowColDef = {
  width: 50,
  maxWidth: 50,
  field: 'removeRow',
  headerName: '',
  cellRenderer: RemoveRenderer 
}

export const Grid = ({ rowData, columnDefs, ...props }) => {
  const gridRef = useRef();
  const defaultColDef = useMemo(
    () => ({
      minWidth: 100,
      editable: true,
      resizable: true,
      sortable: true,
    }),
    []
  );

  const statusBar = {
    statusPanels: [ 
        { statusPanel: 'agTotalAndFilteredRowCountComponent' }
    ]
};

  const gridColumnsDef = useMemo(() => {
    if (props.removeRow) {
      return [...columnDefs, removeRowColDef];
    }
    return columnDefs
  }, [columnDefs, props.removeRow]);

  const onFirstDataRendered = useCallback((params) => {
    gridRef.current.api.sizeColumnsToFit();
  }, []);

  return (
    <div className="ag-theme-alpine" style={{ height: props.height || 550, width: "100%" }}>
      <AgGridReact
        ref={gridRef}
        defaultColDef={defaultColDef}
        rowData={rowData}
        columnDefs={gridColumnsDef}
        rowSelection="multiple"
        onFirstDataRendered={onFirstDataRendered}
        statusBar={statusBar}
        {...props}
      ></AgGridReact>
    </div>
  );
};
