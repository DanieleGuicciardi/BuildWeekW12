import WorkExperience from "./WorkingExperiences";
import { useEffect, useState } from "react";
import { Button, Container, Form, Modal } from "react-bootstrap";

const AdminExperiences = () => {
  const [experiences, setExperiences] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    role: "",
    company: "",
    startDate: "",
    endDate: "",
    description: "",
    area: "",
  });

  const userId = "679743ee16f6350015fecb7b";

  const getExperiences = async () => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Nzk3NDNlZTE2ZjYzNTAwMTVmZWNiN2IiLCJpYXQiOjE3Mzc5NjY1NzQsImV4cCI6MTczOTE3NjE3NH0.ecbfCfnccTYR1ELq9AmO_yfP1Qa1s7IFzSArRl_KadE",
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        setExperiences(data);
        console.log("Esperienze recuperate:", data);
      } else {
        throw new Error("Errore nel recupero delle esperienze.");
      }
    } catch (error) {
      console.error("Errore:", error);
    }
  };

  const postExperiences = async () => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences`,
        {
          method: "POST",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Nzk3NDNlZTE2ZjYzNTAwMTVmZWNiN2IiLCJpYXQiOjE3Mzc5NjY1NzQsImV4cCI6MTczOTE3NjE3NH0.ecbfCfnccTYR1ELq9AmO_yfP1Qa1s7IFzSArRl_KadE",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      if (response.ok) {
        console.log("Esperienza aggiunta con successo!");
      } else {
        throw new Error("Errore durante l'invio dell'esperienza.");
      }
    } catch (error) {
      console.error("Errore:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await postExperiences();
    setFormData({
      role: "",
      company: "",
      startDate: "",
      endDate: "",
      description: "",
      area: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {
    getExperiences();
  }, []);

  useEffect(() => {
    getExperiences();
  }, [formData]);

  return (
    <Container className="mt-4 ">
      <div className="max-w-md mx-auto  bg-white rounded-2xl shadow-lg rounded-3 p-3">
        <div className=" d-flex justify-content-between ">
          {" "}
          <h1 className="text-2xl font-semibold mb-6">Esperienze Lavorative</h1>
          <Button
            variant="link"
            className="text-dark p-0  fs-2 "
            onClick={() => setShowModal(true)}
          >
            <i className="bi bi-plus-lg"></i>
          </Button>
        </div>

        <Modal show={showModal} onHide={() => setShowModal(false)} centered>
          <Modal.Header closeButton>
            <Modal.Title>Aggiungi Nuova Esperienza</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Ruolo</Form.Label>
                <Form.Control
                  type="text"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  placeholder="Inserisci il ruolo"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Azienda</Form.Label>
                <Form.Control
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Inserisci il nome dell'azienda"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Data di inizio</Form.Label>
                <Form.Control
                  type="date"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Data di fine</Form.Label>
                <Form.Control
                  type="date"
                  name="endDate"
                  value={formData.endDate}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Descrizione</Form.Label>
                <Form.Control
                  as="textarea"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Descrivi l'esperienza"
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

              <Button variant="primary" type="submit" className="w-100">
                Invia
              </Button>
            </Form>
          </Modal.Body>
        </Modal>

        <div className="mt-5 ">
          {experiences.map((experience) => (
            <WorkExperience key={experience._id} experiences={experience} />
          ))}
        </div>
      </div>{" "}
    </Container>
  );
};

export default AdminExperiences;
