/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { Alert, Container, Row, Spinner, Col } from "react-bootstrap";
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
        setPosts(datas.slice(0, 15));

        setIsLoading(false);

        console.log("Result: ", result);
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
    }else{
      await postPosts();
    }
    setEditId(null);
  }

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

  useEffect(() => {
    getPost();
  }, []);

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
                <div className="input-group bg-white mt-3">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="form-control"
                    placeholder="Dicci a cosa stai pensando"
                    aria-label="Dicci a cosa stai pensando"
                  />
                  <input
                    type="file"
                    onChange={handleImageChange}
                    className="form-control"
                    placeholder="Inserisci un'immagine al tuo post"
                    aria-label="Inserisci un'immagine al tuo post"
                  />
                  <button type="submit" className="btn btn-primary">
                    {editId ? "Modifica" : "Invia"}
                  </button>
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
      </Container>
  );
}

export default Home;
