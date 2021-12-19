import "./App.css";
import Header from "./components/Header";
import UsersList from "./components/UsersList";
import UserDetails from "./components/UserDetails";
import {Routes, Route} from "react-router-dom";
import { HomeContent } from "./components/HomeContent";
import BooksList from "./components/BooksList";
import BookDetails from "./components/BookDetails";


function App() {

  return (
    <>
      <Header />
      <Routes>
          <Route path="" element={<HomeContent/>}></Route>
          <Route exact path="/users" element={<UsersList/>}></Route>
          <Route exact path="/books" element={<BooksList/>}></Route>
          <Route path="/users/:id" element={<UserDetails/>}></Route>
          <Route path="/books/:id" element={<BookDetails/>}></Route>
      </Routes>
    </>
  );
}

export default App;
