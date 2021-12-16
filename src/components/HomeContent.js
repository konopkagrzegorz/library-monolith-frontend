import { Card } from "@mui/material";
import { Typography } from "@mui/material";
import { Link } from "@mui/material";
import styled from "styled-components";

const HomeContainer = styled.div`
    margin-left:auto;
    margin-right:auto;
    text-align:center;
    border: 2px solid, grey;
    border-radius: 20px;
    margin-top: 36px;
    width: 75%
`;

export const HomeContent = () => {
  return (
    <>
      <HomeContainer>
        <Card variant="outlined" style={{ backgroundColor: "#DCDCDC" }}>
          <Typography variant="h3" sx={{ flexGrow: 1 }}>
            Welcome to Library Monolith Frontend
          </Typography>
          <Typography variant="h5" sx={{ flexGrow: 1 }}>
            This is a Frontend application for library-monolith task avaiable in
            EPAM Courses Example.
          </Typography>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            It allows to get users, books, return or rent a book by user.
          </Typography>
        </Card>
      </HomeContainer>
    </>
  );
};
