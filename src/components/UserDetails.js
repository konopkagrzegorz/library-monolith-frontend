import { useEffect, useState } from "react";
import { Avatar } from "@mui/material";
import Card from "@material-ui/core/Card";
import { Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { Grid } from "@mui/material";

function UserDetails() {
  const [user, setUser] = useState({});
  const [userPicture, setUserPicture] = useState([]);
  const params = useParams();

  useEffect(() => {
    fetch(`https://library-monolith-backend.herokuapp.com/users/${params.id}`)
      .then((response) => response.json())
      .then((data) => setUser(data));

    fetch("https://randomuser.me/api/")
      .then((response) => response.json())
      .then((data) => setUserPicture(data.results[0].picture.large));
  }, []);

  console.log(user);
  console.log(userPicture);
  return (
    <>
      <Grid
        key={user.id}
        item
        xs={12}
        width="400px"
        margin="auto"
        marginTop="100px"
        textAlign="center"
        style={{ marginBottom: "20px" }}
      >
        <Card
          variant="outlined"
          style={{
            backgroundColor: "#DCDCDC",
          }}
        >
          <Avatar
            alt="UserImage"
            src={userPicture}
            sx={{ width: 75, height: 75 }}
            style={{
              margin: "auto",
              marginTop: "14px",
              marginBottom: "14px"
            }}
          />
          <Typography variant="h5" sx={{ flexGrow: 1 }}>
            {user.username}
          </Typography>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            User id: {user.id}
          </Typography>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            User roles: {user.roles}
          </Typography>
          <Typography variant="h6" sx={{ flexGrow: 1 }}></Typography>
        </Card>
      </Grid>
    </>
  );
}

export default UserDetails;
