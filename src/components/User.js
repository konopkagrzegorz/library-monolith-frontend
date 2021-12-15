import { Typography } from "@mui/material";
import { Card } from "@mui/material";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const User = ({user}) => {
  return (
    <>
    <Card variant="outlined" style={{backgroundColor: "#DCDCDC"}}>
      <Typography variant="h5" sx={{ flexGrow: 1 }}>{user.username}</Typography>
      <Typography variant="h6" sx={{ flexGrow: 1 }}>User id: {user.id}</Typography>
      <Typography variant="h6" sx={{ flexGrow: 1 }}></Typography>
      <Link to={`/users/${user.id}`}><Button variant="contained" color="success" style={{marginBottom: "14px"}}>User Details</Button></Link>
      </Card>
    </>
  );
};

export default User;
