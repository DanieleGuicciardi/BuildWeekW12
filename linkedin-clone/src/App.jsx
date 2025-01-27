import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <Container>
        <Row>
          <Col lg={8}></Col>
          <Col lg={4}>
            <Sidebar />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
