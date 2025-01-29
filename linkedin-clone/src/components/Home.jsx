import { useEffect, useState } from "react";
import { Alert,  Container, Row, Spinner, Col } from "react-bootstrap";
import HomePosts from "./HomePosts";
import SidebarHleft from "./SidebarHleft"
import SidebarHright from "./SidebarHright"
function Home() {
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);
  const [show, setShow] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [editId, setEditId] = useState(null);

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
        setPosts(datas.slice(0, 50));

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
          body: JSON.stringify(data),
        }
      );
      if (response.ok) {
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
      setEditId(null);
      await getPost();
    } else {
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
          const result = await response.json();
          setData(result);
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
    }
  };

  useEffect(() => {
    getPost();
  }, []);

  return (
    <div className="">
      <Container>
        <Row>
           <Col lg={3}>  <SidebarHleft/> </Col> 
           <Col lg={7}> 
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
                    placeholder="Scrivi qualcosa..."
                    aria-label="Scrivi qualcosa"
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
          <Col lg={2}> <SidebarHright/> </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
