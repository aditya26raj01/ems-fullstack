import "./App.css";

import ListEmployeeComponent from "./component/ListEmployeeComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EmployeeComponent from "./component/EmployeeComponent";
import Header from "./component/Header";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ListEmployeeComponent />} />
          <Route path="/add-employee" element={<EmployeeComponent />} />
          <Route path="/update-employee/:id" element={<EmployeeComponent />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
