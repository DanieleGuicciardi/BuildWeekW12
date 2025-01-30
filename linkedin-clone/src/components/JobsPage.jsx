import Jobs from "./Jobs";
import SidebarHleft from "./SidebarHleft";
import { Container, Row, Col } from "react-bootstrap";

const JobsPage = () => {
    return (
        <Container>
        <Row>
          <Col lg={3}>
            <SidebarHleft/>
          </Col>
          <Col lg={6}>
          <Jobs/>
          </Col>
          <Col lg={3}>
          </Col>
        </Row>
      </Container>
    )
}

export default JobsPage;

