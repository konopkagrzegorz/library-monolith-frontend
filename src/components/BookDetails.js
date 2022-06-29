import { useState } from "react";
import { Card } from "@mui/material";
import { Typography } from "@mui/material";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

function BookDetails() {

    const [book, setBook] = useState({});
    const params = useParams();

    useEffect(() => {
        fetch(`https://library-monolith-backend.herokuapp.com/books/${params.id}`)
          .then((response) => response.json())
          .then((data) => setBook(data));
      }, [params.id]);


    return (
        <>
        <Card variant="outlined" style={{backgroundColor: "#DCDCDC"}}>
          <Typography variant="h5" sx={{ flexGrow: 1 }}>Id: {book.id}</Typography>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>Title: {book.title}</Typography>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>Author: {book.author}</Typography>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>Quantity: {book.quantity}</Typography>
          </Card>
        </>
      );
};

export default BookDetails;