import { Container, Col, Row, Dropdown } from "react-bootstrap";
import logoFooter from "../assets/LI-Logo.png";
const JobsFooter = function () {
  return (
    <Container className="mt-4 p-3 text-muted" style={{ backgroundColor: "#F4F2EE" }}>
      <Row className="g-1 justify-content-center">
        <Col xs={6} md={4} className="footer-link text-center ps-0">
          <a href="#" className="page-link" style={{ fontSize: "12px" }}>
            Informazioni
          </a>
        </Col>
        <Col xs={6} md={4} className="footer-link text-center ps-0 ">
          <a href="#" className="page-link" style={{ fontSize: "12px" }}>
            Accessibilità
          </a>
        </Col>

        <Col xs={6} md={5} className="footer-link text-center">
          <a href="#" className="page-link" style={{ fontSize: "12px" }}>
            Centro assistenza
          </a>
        </Col>
        <Col xs={6} md={5} className="footer-link text-center">
          <Dropdown>
            <Dropdown.Toggle
              variant="link"
              className="page-link p-0"
              style={{ fontSize: "12px", textDecoration: "none" }}
            >
              Privacy e condizioni
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#" style={{ fontSize: "10px" }}>
                Informativa sulla privacy
              </Dropdown.Item>
              <Dropdown.Item href="#" style={{ fontSize: "10px" }}>
                Termini di servizio
              </Dropdown.Item>
              <Dropdown.Item href="#" style={{ fontSize: "10px" }}>
                Cookie Policy
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>

        <Col xs={12} className="footer-link text-center mt-1">
          <a href="#" className="page-link" style={{ fontSize: "12px" }}>
            Opzioni per gli annunci pubblicitari
          </a>
        </Col>

        <Col xs={6} md={4} className="footer-link text-center ps-3">
          <Dropdown>
            <Dropdown.Toggle
              variant="link"
              className="page-link pe-3"
              style={{ fontSize: "12px", textDecoration: "none" }}
            >
              Servizi alle aziende
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#" style={{ fontSize: "10px" }}>
                Informativa sulla privacy
              </Dropdown.Item>
              <Dropdown.Item href="#" style={{ fontSize: "10px" }}>
                Termini di servizio
              </Dropdown.Item>
              <Dropdown.Item href="#" style={{ fontSize: "10px" }}>
                Cookie Policy
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
        <Col xs={6} md={5} className="footer-link text-center ps-4">
          <a href="#" className="page-link" style={{ fontSize: "12px" }}>
            Pubblicità
          </a>
        </Col>

        <Col xs={6} md={4} className="footer-link text-center">
          <a href="#" className="page-link" style={{ fontSize: "12px" }}>
            Scarica LinkedIn
          </a>
        </Col>
        <Col xs={6} md={2} className="footer-link text-center">
          <a href="#" className="page-link" style={{ fontSize: "12px" }}>
            Altro
          </a>
        </Col>
      </Row>
      <img src={logoFooter} alt="" className="w-25 ms-4 ps-4" />
      <span className="text-center mt-2 ms-1 " style={{ fontSize: "10px" }}>
        LinkedIn Corporation © 2025
      </span>
    </Container>
  );
};

export default JobsFooter;