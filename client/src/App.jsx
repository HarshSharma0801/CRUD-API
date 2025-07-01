import HomePage from "./Components/Pages/Home";
import MatchAllRoute from "./Components/Pages/MatchAllRoute";
import { Route, Routes } from "react-router-dom";
import AddUserForm from "./Components/AddUser/Add";
import UserList from "./Components/ReadUsers/Read";
import Navbar from "./Components/Pages/Navbar";
import EditUserForm from "./Components/EditUsers/Edit";
import axios from "axios";

function App() {
  axios.defaults.baseURL = "http://localhost:5001";
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Navbar />
      <Routes>
        <Route path="/AddUser" element={<AddUserForm />} />
        <Route path="/Read" element={<UserList />} />
        <Route path="/Edit/:id" element={<EditUserForm />} />
        <Route path="*" element={<MatchAllRoute />} />
      </Routes>
    </>
  );
}

export default App;
