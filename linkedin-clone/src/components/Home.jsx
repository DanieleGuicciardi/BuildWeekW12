import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

function Home() {
  const [data, setData] = useState("");
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState("");

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

        console.log("Result: ", result);
      } else {
        throw new Error("Errore nel recupero dati");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
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
        setInput("");
        await getPost();
      } else {
        throw new Error("Errore nell'inserimento dati");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPost();
  }, []);

  return (
    <div className="mt-5">
      <Container>
        <Row>
          <Col lg={2}></Col>
          <Col lg={7}>
            {console.log(posts)}
            <br />
            <br />
            <br />
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Scrivi qualcosa"
              />
              <button type="submit">Invia</button>
            </form>

            {data && (
              <div>
                <h3>Risposta del server:</h3>
                <pre>{JSON.stringify(data, null, 2)}</pre>
              </div>
            )}

            {posts && (
              <div>
                {posts.map((e) => (
                  <div key={e._id} className=" text-break">
                    <h4>{e.text}</h4>
                    <p>{e.user.bio}</p>
                    <p>{e.username}</p>
                    <hr />
                  </div>
                ))}
              </div>
            )}
          </Col>
          <Col lg={3}></Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
