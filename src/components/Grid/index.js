import { AgGridReact } from "ag-grid-react";
import React, {
  forwardRef,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from "react";
import { RemoveRenderer } from "./RemoveRenderer";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import DeleteIcon from "@mui/icons-material/Delete";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import * as XLSX from "xlsx";
import { useUpdateEffect } from "react-use";

const removeRowColDef = {
  width: 50,
  maxWidth: 50,
  field: "removeRow",
  headerName: "",
  cellRenderer: RemoveRenderer,
};

const selectionColDef = {
  field: "selection",
  headerName: "",
  minWidth: 35,
  maxWidth: 35,
  width: 35,
  checkboxSelection: true,
  headerCheckboxSelection: true,
};

export default forwardRef(({ rowData, columnDefs, ...props }, ref) => {
  const [gridApi, setGridApi] = useState();
  const [file, setFile] = useState();
  const [, setColumnApi] = useState();
  const importRef = useRef(null);

  const defaultColDef = useMemo(
    () => ({
      flex: 1,
      minWidth: 150,
      editable: true,
      resizable: true,
      sortable: true,
    }),
    []
  );

  useUpdateEffect(() => {
    readFile();
  }, [file]);

  const readFile = () => {
    const f = file;
    const reader = new FileReader();
    reader.onload = (evt) => {
      const bstr = evt.target.result;
      const wb = XLSX.read(bstr, { type: "binary" });
      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];
      const data = XLSX.utils.sheet_to_csv(ws, { header: 1 });
      convertToJson(data);
    };
    reader.readAsBinaryString(f);
  };

  const convertToJson = (csv) => {
    const lines = csv.split("\n");
    const result = [];
    const headers = lines[0].split(",");

    for (let i = 1; i < lines.length; i++) {
      let obj = {};
      let currentline = lines[i].split(",");

      for (let j = 0; j < headers.length; j++) {
        obj[headers[j]] = currentline[j];
      }

      result.push(obj);
    }
    const newHeaders = headers.map((header) => ({
      field: header,
      headerName: header,
    }));
    gridApi.setColumnDefs([selectionColDef, ...newHeaders, removeRowColDef]);
    gridApi.setRowData(result);
    gridApi.refreshCells({
      force: true,
    });
    gridApi.sizeColumnsToFit();
    return { headers, result };
  };

  useImperativeHandle(ref, () => ({
    getRows: () => {
      let rows = [];
      gridApi.forEachNodeAfterFilterAndSort((node) => rows.push(node.data));
      return rows;
    },
    setRows: (rows) => {
      gridApi.setRowData(rows);
    },
  }));

  const importExcel = () => {
    importRef.current.click();
  };

  const uploadFile = (e) => {
    e.stopPropagation();
    e.preventDefault();
    var file = e.target.files[0];
    setFile(file);
  };

  const gridButtons = useMemo(
    () => [
      {
        title: "Guardar",
        onClick: props.onSave,
        icon: <InsertDriveFileIcon />,
      },
      {
        title: "Agregar nueva fila",
        onClick: () => {
          gridApi.updateRowData({
            add: [{}],
          });
        },
        icon: <AddCircleOutlineOutlinedIcon />,
      },
      {
        title: "Borrar filas seleccionadas",
        onClick: () => {
          const selectedRows = gridApi.getSelectedRows();
          gridApi.updateRowData({
            remove: selectedRows,
          });
        },
        icon: <DeleteIcon />,
      },
      {
        title: "Exportar a Excel",
        onClick: () => {
          gridApi.exportDataAsExcel();
        },
        icon: <FileUploadIcon />,
      },
      {
        title: "Importar de Excel",
        onClick: importExcel,
        icon: <FileDownloadIcon />,
      },
    ],
    [props.onSave, gridApi]
  );

  const statusBar = {
    statusPanels: [{ statusPanel: "agTotalAndFilteredRowCountComponent" }],
  };

  const onGridReady = (gridOptions) => {
    setGridApi(gridOptions.api);
    setColumnApi(gridOptions.columnApi);
  };

  const gridColumnsDef = useMemo(() => {
    const colDefs = [selectionColDef, ...columnDefs];
    if (props.removeRow) {
      colDefs.push(removeRowColDef);
    }
    return colDefs;
  }, [columnDefs, props.removeRow]);

  return (
    <div
      className="ag-theme-alpine"
      style={{ height: 600, width: "fit-content" }}
    >
      <div className="flex">
        {gridButtons.map((button) => (
          <div
            className="mb-2 mr-4 text-blue-600 flex items-center cursor-pointer"
            onClick={button.onClick}
          >
            {button.icon}
            <span className="text-sm font-bold">{button.title}</span>
          </div>
        ))}
      </div>

      <AgGridReact
        defaultColDef={defaultColDef}
        rowData={rowData}
        columnDefs={gridColumnsDef}
        rowSelection="multiple"
        onGridReady={onGridReady}
        //onFirstDataRendered={onFirstDataRendered}
        // statusBar={statusBar}
        containerStyle={{ width: 1200 }}
        {...props.gridOptions}
      />
      <input
        type="file"
        ref={importRef}
        className="hidden"
        onChange={uploadFile}
      />
    </div>
  );
});
