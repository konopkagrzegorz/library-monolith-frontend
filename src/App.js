import "./App.css";
import Header from "./components/Header";
import UsersList from "./components/UsersList";
import UserDetails from "./components/UserDetails";
import {Routes, Route} from "react-router-dom";

function App() {

  return (
    <>
      <Header />
      <Routes>
          <Route exact path="" element={<UsersList/>}></Route>
          <Route path="/users/:id" element={<UserDetails/>}></Route>
      </Routes>
    </>
  );
}

export default App;
