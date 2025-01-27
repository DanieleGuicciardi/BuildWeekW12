import React from "react";
import {
  Container,
  Row,
  Col,
  Image,
  Button,
  Card,
  Badge,
} from "react-bootstrap";

function Profile() {
  return (
    <Container
      className=" nav-space"
      style={{
        maxWidth: "800px",
        backgroundColor: "#f9f9f9",
        borderRadius: "10px",
      }}
    >
      <Row>
        <Col
          style={{
            height: "160px",
            backgroundColor: "#d3dde6",
            borderTopLeftRadius: "10px",
            borderTopRightRadius: "10px",
            position: "relative",
          }}
        >
          <Button
            variant="light"
            className="position-absolute top-0 end-0 m-4"
            style={{
              border: "1px solid lightgray",
              borderRadius: "50%",
              width: "35px",
              height: "35px",
              padding: 0,
            }}
          >
            <i className="bi bi-camera text-primary"></i>
          </Button>
        </Col>
      </Row>
      <Row className="justify-content-start ps-3">
        <Col
          xs="auto"
          className="text-start"
          style={{ marginTop: "-85px", position: "relative" }}
        >
          <Image
            src="https://static.vecteezy.com/system/resources/previews/005/129/844/non_2x/profile-user-icon-isolated-on-white-background-eps10-free-vector.jpg"
            roundedCircle
            style={{
              border: "4px solid white",
              width: "120px",
              height: "120px",
              objectFit: "cover",
            }}
          />
          <Button
            variant="light"
            className="p-0"
            style={{
              position: "absolute",
              bottom: "5px",
              left: "100px",
              border: "1px solid #0D6EFD",
              borderRadius: "50%",
              width: "35px",
              height: "35px",
            }}
          >
            <i className="bi bi-plus-lg text-primary"></i>
          </Button>
        </Col>
      </Row>
      <Row className="justify-content-start text-start ps-3 position-relative">
        <Col xs="auto">
          <h5 className="d-inline me-2">Nome Utente</h5>
          <Badge
            bg="light"
            text="primary"
            className="px-2"
            style={{
              fontSize: "12px",
              border: "1px solid #0D6EFD",
            }}
          >
            <i className="bi bi-shield-check"></i> Aggiungi badge di verifica
          </Badge>
          <p className="text-muted mt-2 d-i">
            <small className="me-2">Città, Regione, Stato</small>
            <span>
              <a href="#" className="text-primary" style={{ fontSize: "14px" }}>
                Informazioni di contatto
              </a>
            </span>
          </p>
        </Col>
        <Col
          xs="auto"
          className="position-absolute"
          style={{ top: "0", right: "15px" }}
        >
          <Button
            variant="link"
            className="p-0 m-2 text-dark"
            style={{
              fontSize: "16px",
            }}
          >
            <i className="bi bi-pencil"></i>
          </Button>
        </Col>
      </Row>

      <Row className="justify-content-start text-start ps-3 mt-1">
        <Col xs="auto">
          <p className="mb-2">
            <a href="#" className="text-primary" style={{ fontSize: "14px" }}>
              1 collegamento
            </a>
          </p>
          <Button
            variant="primary"
            className="me-2 rounded-pill fw-bold"
            size="sm"
          >
            Disponibile per
          </Button>
          <Button
            variant="outline-primary"
            className="me-2 rounded-pill fw-bold"
            size="sm"
          >
            Aggiungi sezione del profilo
          </Button>
          <Button
            variant="outline-primary"
            className="me-2 rounded-pill fw-bold"
            size="sm"
          >
            Migliora profilo
          </Button>
          <Button
            variant="outline-secondary"
            className="rounded-pill fw-bold"
            size="sm"
          >
            Risorse
          </Button>
        </Col>
      </Row>
      <Row className="mt-3 pb-3">
        <Col md={6} className="text-start ps-3">
          <Card className="p-2 shadow-sm position-relative">
            <Button
              variant="link"
              className="position-absolute top-0 end-0 p-0 m-1 text-muted"
              style={{ fontSize: "16px" }}
            >
              <i className="bi bi-x"></i>
            </Button>
            <h6 className="m-0" style={{ fontSize: "14px" }}>
              Mostra ai recruiter che sei disponibile a lavorare:
            </h6>
            <p className="text-muted" style={{ fontSize: "14px" }}>
              sei tu che decidi chi può vedere questa informazione.
            </p>
            <Button
              variant="link"
              className="p-0 text-primary text-start"
              style={{ fontSize: "14px" }}
            >
              Inizia
            </Button>
          </Card>
        </Col>
        <Col md={6} className="text-start ps-3">
          <Card className="p-2 shadow-sm position-relative">
            <Button
              variant="link"
              className="position-absolute top-0 end-0 p-0 m-1 text-muted"
              style={{ fontSize: "16px" }}
            >
              <i className="bi bi-x"></i>
            </Button>
            <h6 className="m-0" style={{ fontSize: "14px" }}>
              Fai sapere che stai facendo selezione
            </h6>
            <p className="text-muted" style={{ fontSize: "14px" }}>
              e attrai candidati qualificati
            </p>
            <Button
              variant="link"
              className="p-0 text-primary text-start"
              style={{ fontSize: "14px" }}
            >
              Inizia
            </Button>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Profile;
