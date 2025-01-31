import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import { Container } from "react-bootstrap";

//import Sidebar from "./components/Sidebar";
//import Profile from './components/Profile';
import MyNavbar from "./components/MyNavbar";

import MyFooter from "./components/MyFooter";
import AdminArea from "./components/AdminArea";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
// import Home from "./components/Home";
import WorkingDetails from "./components/WorkingDetails";
import PagError from "./components/PagError";
import Home from "./components/Home";
import JobsPage from "./components/JobsPage";
import Postdetails from "./components/PostDetails";

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

function AppContent() {
  const location = useLocation(); // Adesso è dentro <BrowserRouter>

  return (
    <>
      <MyNavbar />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<PagError />} />
          <Route path="/profile" element={<AdminArea />} />
          <Route path="/workingdetails/:id" element={<WorkingDetails />} />
          <Route path="/jobs" element={<JobsPage />} />
          <Route path="/postdetails/:id" element={<Postdetails />} />
        </Routes>

        {/* Nasconde il footer solo nella pagina /jobs */}
        {location.pathname !== "/jobs" && <MyFooter />}
      </Container>
    </>
  );
}

export default App;
