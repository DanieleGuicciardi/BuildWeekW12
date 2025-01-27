import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import MyFooter from "./components/MyFooter";

function App() {
  return (
    <>
      <Container>
        <Row>
          <Col lg={8}></Col>
          <Col lg={4}></Col>
        </Row>
        <MyFooter />
      </Container>
    </>
  );
}

export default App;
