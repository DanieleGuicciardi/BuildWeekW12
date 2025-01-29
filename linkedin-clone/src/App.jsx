import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import { Container } from "react-bootstrap";

//import Sidebar from "./components/Sidebar";
//import Profile from './components/Profile';
import MyNavbar from "./components/MyNavbar";

import MyFooter from "./components/MyFooter";
import AdminArea from "./components/AdminArea";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import WorkingDetails from "./components/WorkingDetails";
import PagError from "./components/PagError";

function App() {
  return (
    <>
      <BrowserRouter>
        <Container>
          <MyNavbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<PagError />} />
            <Route path="/profile" element={<AdminArea />} />
            <Route path="/workingdetails/:id" element={<WorkingDetails />} />
          </Routes>

          <MyFooter />
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
