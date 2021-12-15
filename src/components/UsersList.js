import { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import User from "./User";

function UsersList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      marginTop="20px"
      textAlign="center"
      style={{ minHeight: "100vh" }}
    >
      {users.map((user) => {
        return <Grid 
        key={user.id}
        item xs={12}
        width="400px"
        style={{marginBottom: "20px"}}>
        <User key={user.id} user={user}></User></Grid>;
      })}
    </Grid>
  );
}

export default UsersList;
