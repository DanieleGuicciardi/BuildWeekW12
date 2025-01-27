import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import { Container } from "react-bootstrap";

//import Sidebar from "./components/Sidebar";
//import Profile from './components/Profile';
import MyNavbar from './components/MyNavbar';
import MyFooter from "./components/MyFooter";
import AdminArea from "./components/AdminArea";

function App() {
  return (
    <>
      <MyNavbar/>
      <Container>
        <AdminArea/>
        <MyFooter />

      </Container>
    </>
  );
}

export default App;
