import { Box } from "@mui/system";
import { AppBar } from "@mui/material";
import { Toolbar } from "@mui/material";
import { IconButton } from "@mui/material";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import ArticleIcon from '@mui/icons-material/Article';
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="success">
        <Toolbar>
          <NavLink to="/"><IconButton
            size="large"
            edge="start"
            color="info"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <ArticleIcon />
          </IconButton></NavLink>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            Library Monolith
          </Typography>
         <Button color="inherit" component={NavLink} to="/users">Users</Button>
         <Button color="inherit" component={NavLink} to="/books">Books</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
