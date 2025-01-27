import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import { Container, Row, Col } from "react-bootstrap";


import Sidebar from "./components/Sidebar";
import Profile from './components/Profile';
import MyNavbar from './components/MyNavbar';
import WorkExperience from './components/Esperienze';

function App() {
  return (
    <>
      <MyNavbar/>
      <Container>
        <Row>
          <Col lg={8}>
          <Profile/>
          <WorkExperience/>
          </Col>
          <Col lg={4}>
            <Sidebar />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
