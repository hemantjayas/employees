import { useEffect } from "react";
import Navbar from "./components/navbar/Navbar";
import { FetchData } from "./store/actions/FetchData";
import { useDispatch } from "react-redux";
import Home from "./components/home/Home";
import { Route, Routes } from "react-router-dom";
import AddEmployees from "./components/addEmployees/AddEmployees";


function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addEmployees" element={<AddEmployees />} />
      </Routes>
    </div>
  );
}

export default App;
