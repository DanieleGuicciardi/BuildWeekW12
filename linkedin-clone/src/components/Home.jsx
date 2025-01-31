/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import {
  Alert,
  Container,
  Row,
  Spinner,
  Col,
  Form,
  Modal,
  Button,
} from "react-bootstrap";
import HomePosts from "./HomePosts";
import SidebarHleft from "./SidebarHleft";
import SidebarHright from "./SidebarHright";
function Home() {
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);
  const [show, setShow] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [editId, setEditId] = useState(null);
  const [img, setImg] = useState(null);
  const [myProfile, setMyProfile] = useState("");
  const [postLimit, setPostLimit] = useState(15);


  const getPost = async () => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/posts/",
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Nzk3NDNlZTE2ZjYzNTAwMTVmZWNiN2IiLCJpYXQiOjE3Mzc5NjY1NzQsImV4cCI6MTczOTE3NjE3NH0.ecbfCfnccTYR1ELq9AmO_yfP1Qa1s7IFzSArRl_KadE",
          },
        }
      );

      if (response.ok) {
        const result = await response.json();
        const datas = result.reverse();

        setPosts(datas.slice(0, postLimit));

        setIsLoading(false);

        console.log("Post caricati: ", datas.slice(0, postLimit));
      } else {
        throw new Error("Errore nel recupero dati");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deletePost = async (id) => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/posts/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Nzk3NDNlZTE2ZjYzNTAwMTVmZWNiN2IiLCJpYXQiOjE3Mzc5NjY1NzQsImV4cCI6MTczOTE3NjE3NH0.ecbfCfnccTYR1ELq9AmO_yfP1Qa1s7IFzSArRl_KadE",
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );
      if (response.ok) {
        await getPost();
      } else {
        throw new Error("Errore durante l'eliminazione del post.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const modifyPost = async (id) => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/posts/${id}`,
        {
          method: "PUT",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Nzk3NDNlZTE2ZjYzNTAwMTVmZWNiN2IiLCJpYXQiOjE3Mzc5NjY1NzQsImV4cCI6MTczOTE3NjE3NH0.ecbfCfnccTYR1ELq9AmO_yfP1Qa1s7IFzSArRl_KadE",
            "Content-type": "application/json; charset=UTF-8",
          },
          body: JSON.stringify({ text: input }),
        }
      );
      if (response.ok) {
        const newPost = await response.json();
        console.log("Esperienza aggiunta con successo:", newPost);
        if (img) {
          console.log("Caricamento immagine per esperienza ID:", newPost._id);
          await postImgExperiences(newPost._id);
        }
        setEditId(null);
        setInput("");
        await getPost();
      } else {
        throw new Error("Errore durante la modifica del post.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editId) {
      await modifyPost(editId);
    } else {
      await postPosts();
    }
    setEditId(null);
  };

  const postPosts = async () => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/posts/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",

            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Nzk3NDNlZTE2ZjYzNTAwMTVmZWNiN2IiLCJpYXQiOjE3Mzc5NjY1NzQsImV4cCI6MTczOTE3NjE3NH0.ecbfCfnccTYR1ELq9AmO_yfP1Qa1s7IFzSArRl_KadE",
          },
          body: JSON.stringify({ text: input }),
        }
      );

      if (response.ok) {
        const newPost = await response.json();
        console.log("Esperienza aggiunta con successo:", newPost);
        if (img) {
          console.log("Caricamento immagine per esperienza ID:", newPost._id);
          await postImgExperiences(newPost._id);
        }
        setData(newPost);
        setShow(true);

        setTimeout(() => {
          setShow(false);
        }, 5000);

        console.log("Dati inseriti: ");
        setInput("");
        await getPost();
      } else {
        throw new Error("Errore nell'inserimento dati");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const postImgExperiences = async (id) => {
    const formImg = new FormData();
    formImg.append("post", img);
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/posts/${id}`,
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
        setImg("");
      } else {
        throw new Error("Errore durante l'invio dell'esperienza.");
      }
    } catch (error) {
      console.error("Errore:", error);
    }
  };

  const handleImageChange = (e) => {
    if (e.target.files.length > 0) {
      console.log("File selezionato:", e.target.files[0]);
      setImg(e.target.files[0]);
    }
  };

  const getMyProfile = async () => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/me",
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Nzk3NDNlZTE2ZjYzNTAwMTVmZWNiN2IiLCJpYXQiOjE3Mzc5NjY1NzQsImV4cCI6MTczOTE3NjE3NH0.ecbfCfnccTYR1ELq9AmO_yfP1Qa1s7IFzSArRl_KadE",
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        setMyProfile(data);
        console.log("Mio Profilo:", data);
      } else {
        throw new Error("Errore nel recupero dati..");
      }
    } catch (error) {
      console.log(error);
    }
  const loadMorePosts = () => {
    setPostLimit(prevLimit => prevLimit + 15);
  };

  useEffect(() => {
    getPost();
    getMyProfile();
  }, [postLimit]);

  return (
    <Container>
      <Row>
        <Col lg={3}>
          <SidebarHleft />
        </Col>
        <Col lg={6}>
          {console.log(posts)}

          <form onSubmit={handleSubmit} className="my-4">
            <div className="bg-white rounded-2 p-2">
              <h3>Crea un post</h3>

              <div className="card p-3 shadow-sm mt-3">
                <div className="d-flex align-items-center mb-2">
                  <img
                    src={myProfile.image}
                    alt="User Avatar"
                    className="rounded-circle me-2"
                    width="40"
                    height="40"
                  />
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="form-control rounded-pill"
                    placeholder="Di cosa vuoi parlare?"
                    aria-label="Di cosa vuoi parlare?"
                  />
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center">
                    <input
                      type="file"
                      onChange={handleImageChange}
                      className="d-none"
                      id="fileInput"
                    />
                    <label
                      htmlFor="fileInput"
                      className="text-primary cursor-pointer me-2"
                    >
                      📷 <span> Aggiungi immagine</span>
                    </label>
                    {img && (
                      <span className="text-muted small">{img.name}</span>
                    )}
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary rounded-pill px-4"
                  >
                    {editId ? "Modifica" : "Pubblica"}
                  </button>
                </div>
              </div>
            </div>
          </form>

          {show && (
            <Alert variant="success" className="my-2">
              Post pubblicato con successo !!
            </Alert>
          )}

          {isLoading && (
            <div className="text-center">
              <Spinner animation="border" variant="primary" />
            </div>
          )}

          {posts && (
            <div>
              {posts.map((posts) => (
                <HomePosts
                  key={posts._id}
                  posts={posts}
                  deletePost={deletePost}
                  modifyPost={() => {
                    setEditId(posts._id);
                    setInput(posts.text);
                  }}
                />
              ))}
            </div>
          )}
        </Col>
        <Col lg={3}>
          <SidebarHright />
        </Col>
      </Row>
      {/* <Modal show={showModal} onHide={handleCloseModal} centered>
            {posts && (
              <div>
                {posts.map((posts) => (
                  <HomePosts
                    key={posts._id}
                    posts={posts}
                    deletePost={deletePost}
                    modifyPost={() => {
                      setEditId(posts._id);
                      setInput(posts.text);
                    }}
                  />
                ))}
              </div>
            )}
          </Col>
          <Col lg={3}>
            <SidebarHright />
          </Col>
        </Row>
        <Container className="text-center my-3">
        <Button onClick={loadMorePosts} variant="primary">
          Vedi altro
        </Button>
      </Container>
        {/* <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Modifica il tuo post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={modifyPost}>
            <Form.Group className="mb-3">
              <Form.Label>Testo</Form.Label>
              <Form.Control
                type="text"
                name="testo"
                value={formData.testo}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, testo: e.target.value }))
                }
                placeholder="Modifica il testo del post..."
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Immagine</Form.Label>
              <Form.Control
                type="file"
                onChange={handleImgChange}
                accept="image/*"
                className="form-control"
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Salva modifiche
            </Button>
          </Form>
        </Modal.Body>
      </Modal> */}
    </Container>
  );
}

export default Home;
