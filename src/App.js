import "./App.css";
import User from "./components/User";
import Header from "./components/Header";
import { Grid } from "@mui/material";
import UsersList from "./components/UsersList";

function App() {
  return (
    <>
      <Header />
      <UsersList/>
    </>
  );
}

export default App;
