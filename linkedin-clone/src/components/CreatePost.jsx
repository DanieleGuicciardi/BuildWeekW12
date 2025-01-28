import { Button, Form, Modal, Container } from "react-bootstrap";
import { useState } from "react";
import Post from "./Post";

const CreatePost = function () {
  const [posts, setPosts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    think: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aggiungi un ID univoco a ogni post, come un timestamp
    const newPost = { id: Date.now(), think: formData.think };
    setPosts([...posts, newPost]);
    setFormData({
      think: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
      <Container className="mt-4">
        <div className="max-w-md mx-auto bg-white rounded-2xl shadow-lg rounded-3 p-3">
          <div className="d-flex justify-content-between">
            <h2 className="text-2xl font-semibold mb-6">Post</h2>
            <Button
              variant="link"
              className="text-dark p-0 fs-2"
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
                  <Form.Label>Pubblica il tuo post</Form.Label>
                  <Form.Control
                    type="text"
                    name="think"
                    value={formData.think}
                    onChange={handleChange}
                    placeholder="Inserisci il tuo pensiero"
                    required
                  />
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100">
                  Invia
                </Button>
              </Form>
            </Modal.Body>
          </Modal>

          {posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </div>
      </Container>
    </>
  );
};

export default CreatePost;
