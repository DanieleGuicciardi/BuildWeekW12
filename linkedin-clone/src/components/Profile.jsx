import {
  Container,
  Row,
  Col,
  Button,
  Badge,
  Card,
  Modal,
  Form,
  Image,
} from "react-bootstrap";
import { useState } from "react";

function Profile({ myProfile }) {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    bio: "",
    title: "",
    area: "",
  });
  const [img, setImg] = useState(null);
  const [showModalImg, setShowModalImg] = useState(false);

  const userId = "679743ee16f6350015fecb7b";

  const handleSubmit = async (e) => {
    e.preventDefault();
    await modifyProfile();
    setShowModal(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const resetForm = () => {
    setFormData({
      name: "",
      surname: "",
      email: "",
      bio: "",
      title: "",
      area: "",
    });
  };

  const modifyProfile = async () => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/",
        {
          method: "PUT",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Nzk3NDNlZTE2ZjYzNTAwMTVmZWNiN2IiLCJpYXQiOjE3Mzc5NjY1NzQsImV4cCI6MTczOTE3NjE3NH0.ecbfCfnccTYR1ELq9AmO_yfP1Qa1s7IFzSArRl_KadE",
            "Content-type": "application/json; charset=UTF-8",
          },
          body: JSON.stringify(formData),
        }
      );
      if (response.ok) {
        resetForm();
      } else {
        throw new Error("Errore durante la modifica dell'esperienza.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleImgChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setImg(selectedFile);
    }
  };

  const handleSubmitImg = async (e) => {
    e.preventDefault();
    if (!img) {
      alert("Seleziona un'immagine prima di caricare.");
      return;
    }
    await postProfileImg();
  };

  const postProfileImg = async () => {
    const formImg = new FormData();
    formImg.append("profile", img);
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${userId}/picture`,
        {
          method: "POST",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Nzk3NDNlZTE2ZjYzNTAwMTVmZWNiN2IiLCJpYXQiOjE3Mzc5NjY1NzQsImV4cCI6MTczOTE3NjE3NH0.ecbfCfnccTYR1ELq9AmO_yfP1Qa1s7IFzSArRl_KadE",
          },
          body: formImg,
        }
      );
      if (response.ok) {
        console.log("Esperienza aggiunta con successo!");
        setShowModalImg(false);
      } else {
        throw new Error("Errore durante l'invio dell'esperienza.");
      }
    } catch (error) {
      console.error("Errore:", error);
    }
  };

  return (
    <Container>
      <Container
        className="nav-space bg-white border"
        style={{
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
              src={
                myProfile.image
                  ? myProfile.image
                  : "https://static.vecteezy.com/system/resources/previews/005/129/844/non_2x/profile-user-icon-isolated-on-white-background-eps10-free-vector.jpg" // Immagine di default
              }
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
              onClick={() => setShowModalImg(true)}
            >
              <i className="bi bi-plus-lg text-primary"></i>
            </Button>
          </Col>
        </Row>

        <Row className="justify-content-start text-start ps-3 position-relative">
          <Col xs="auto">
            <h5 className="d-inline me-2">
              {myProfile.name} {myProfile.surname}
            </h5>
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
              <small className="me-2">{myProfile.area}</small>
              <span>
                <a
                  href="#"
                  className="text-primary"
                  style={{ fontSize: "14px" }}
                >
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
              onClick={() => setShowModal(true)}
            >
              <i className="bi bi-pencil fs-5"></i>
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
            <Card className="p-2 shadow-sm position-relative mb-sm-3">
              <Button
                variant="link"
                className="position-absolute top-0 end-0 p-0 m-1 text-muted"
                style={{ fontSize: "16px" }}
              >
                <i className="bi bi-x"></i>
              </Button>
              <h6 className="m-0 " style={{ fontSize: "14px" }}>
                Mostra ai recruiter che sei disponibile a lavorare:
              </h6>
              <p className="text-muted" style={{ fontSize: "14px" }}>
                Sei tu che decidi chi può vedere questa informazione.
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
                E attrai candidati qualificati
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
        <Modal show={showModal} onHide={() => setShowModal(false)} centered>
          <Modal.Header closeButton>
            <Modal.Title>Aggiorna Profilo</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Nome</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Inserisci il nome"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Cognome</Form.Label>
                <Form.Control
                  type="text"
                  name="surname"
                  value={formData.surname}
                  onChange={handleChange}
                  placeholder="Inserisci il cognome"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Inserisci l'email"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Biografia</Form.Label>
                <Form.Control
                  as="textarea"
                  name="bio"
                  value={formData.bio}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Parlaci di te"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Titolo</Form.Label>
                <Form.Control
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="Titolo di studio"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Area</Form.Label>
                <Form.Control
                  type="text"
                  name="area"
                  value={formData.area}
                  onChange={handleChange}
                  placeholder="Inserisci l'area geografica"
                  required
                />
              </Form.Group>

              <Button variant="primary" type="submit" className="w-50">
                Aggiorna
              </Button>
            </Form>
          </Modal.Body>
        </Modal>

        <Modal show={showModalImg} onHide={() => setShowModalImg(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Carica immagine del profilo</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={handleSubmitImg}>
              <input
                type="file"
                onChange={handleImgChange}
                accept="image/"
                className="form-control"
                required
              />
              <div className="mt-3">
                <Button variant="primary" type="submit">
                  Carica
                </Button>
              </div>
            </form>
          </Modal.Body>
        </Modal>
      </Container>
    </Container>
  );
}

export default Profile;
