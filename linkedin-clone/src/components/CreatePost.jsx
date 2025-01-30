import { Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import Post from "./Post";
import { Trash } from "react-bootstrap-icons";

const myUsername = "Dani EFFE";

const CreatePost = function () {
  const [posts, setPosts] = useState([]);
  // const [showModal, setShowModal] = useState(false);
  // const [formData, setFormData] = useState({
  //   think: "",
  // });

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
        setPosts(datas);
        console.log("Result: ", datas);
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

  useEffect(() => {
    getPost();
  }, []);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const newPost = { id: Date.now(), think: formData.think };
  //   setPosts([...posts, newPost]);
  //   setFormData({
  //     think: "",
  //   });
  // };

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });
  // };

  return (
    <>
      <Container className="mt-4">
        <div className=" mx-auto bg-white border rounded-3 p-3">
          {/* <div className="d-flex justify-content-between">
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
          </Modal> */}
          <h2>I miei Post</h2>
          {posts
            .filter((post) => post.username == myUsername)
            .map((post) => (
              <>
                {/* <Post key={post.id} post={post} /> */}
                <div className="container mt-4" key={post.id}>
                  <div className="list-group">
                    <div className="list-group-item list-group-item-action mb-3">
                      <div className="w-100">
                        <p>{post.text}</p>
                        <div>
                          {post.image && (
                            <img src={post.image} className="w-100" />
                          )}
                        </div>
                      </div>
                      <div>
                        <Trash
                          className=" text-danger"
                          onClick={() => deletePost(post._id)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ))}
        </div>
      </Container>
    </>
  );
};

export default CreatePost;
