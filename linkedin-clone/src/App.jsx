import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import './App.css'
import {Container, Row, Col} from 'react-bootstrap';
import Profile from './components/Profile';

function App() {

  return (
    <>
    <Container>
    <Row>
      <Col lg={8}>
      <Profile/>
      </Col>
      <Col lg={4}></Col>
    </Row>
    </Container>
    </>
  )
}

export default App
