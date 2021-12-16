import { DataGrid } from "@mui/x-data-grid";
import { useDemoData } from "@mui/x-data-grid-generator";
import { useEffect, useState } from "react";

const columns = [
  {
    field: "id",
    headerName: "ID",
    width: 120,
  },
  {
    field: "title",
    headerName: "Title",
    type: "text",
    width: 600,
  },
  {
    field: "author",
    headerName: "Author",
    width: 180,
    type: "text",
  },
  {
    field: "quantity",
    headerName: "Quantity",
    width: 150,
    type: "number",
  },
];

export default function BooksList() {
    
  const [books, setBooks] = useState([]);

  useEffect(() => {
      fetch("http://localhost:8080/books")
      .then(response => response.json())
      .then(data => setBooks(data));
  }, []);

  return (
    <div style={{
        height: 400,
        width: "60%",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "30px"
        }}>
      <DataGrid
      selectionModel={[]} 
      pageSize={books.length}
      rowsPerPageOptions={[]}
      rows={books}
      columns={columns} />
    </div>
  );
}
