import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { Link } from "@mui/material";


const renderDetailsButton = (params) => {
  return (
    <Link href={`/books/${params.id}`}><Button
              variant="contained"
              color="primary"
              size="small"
              style={{ marginLeft: 16 }}>More Info</Button></Link>
  )

}

const columns = [
  {
    field: "id",
    headerName: "ID",
    width: 120,
  },
  {
    field: "title",
    headerName: "Title",
    width: 600,
  },
  {
    field: "author",
    headerName: "Author",
    width: 180,
  },
  {
    field: "quantity",
    headerName: "Quantity",
    width: 150,
    type: "number",
  },
  {
    field: 'details',
    headerName: 'Details',
    type: "text",
    width: 150,
    renderCell: renderDetailsButton,
    disableClickEventBubbling: true,
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
        width: "65%",
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
