import { useEffect, useState } from "react";
import { Card, Col, Container, Row, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";

function Postdetails() {
  const postId = useParams().id;
  const [info, setInfo] = useState();
  const [comment, setComment] = useState();

  const getInfo = async () => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/posts/" + postId,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Nzk3NDNlZTE2ZjYzNTAwMTVmZWNiN2IiLCJpYXQiOjE3Mzc5NjY1NzQsImV4cCI6MTczOTE3NjE3NH0.ecbfCfnccTYR1ELq9AmO_yfP1Qa1s7IFzSArRl_KadE",
          },
        }
      );

      if (response.ok) {
        const result = await response.json();
        setInfo(result);
      } else {
        throw new Error("Errore nel recupero dati");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getComment = async () => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/",
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Nzk3NDNlZTE2ZjYzNTAwMTVmZWNiN2IiLCJpYXQiOjE3Mzc5NjY1NzQsImV4cCI6MTczOTE3NjE3NH0.ecbfCfnccTYR1ELq9AmO_yfP1Qa1s7IFzSArRl_KadE",
          },
        }
      );

      if (response.ok) {
        const result = await response.json();
        setComment(result);
      } else {
        throw new Error("Errore nel recupero dati");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getInfo();
    getComment();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Container className="mt-4">
      <h1 className="text-center mb-4">Post info</h1>
      {info && comment ? (
        <>
          <Row xs={1} md={2} lg={3} className="g-4 justify-content-center">
            {[
              { label: "User", value: info.username },
              {
                label: "Data di creazione",
                value: info.createdAt.slice(0, 10),
              },
              { label: "Ultimo update", value: info.updatedAt.slice(0, 10) },
            ].map((item, index) => (
              <Col key={index}>
                <Card className="shadow-sm border-0 text-center">
                  <Card.Body>
                    <Card.Title className="text-primary">
                      {item.label}
                    </Card.Title>
                    <Card.Text className="fw-bold">{item.value}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          <Row className="mt-4">
            <Col>
              <Card className="shadow-sm border-0">
                <Card.Body>
                  <Card.Title className="text-primary">
                    Contenuto del post
                  </Card.Title>
                  <Card.Text>{info.text}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row className="mt-4">
            <Container>
              <Col className="d-flex justify-content-between align-items-baseline  rounded-2">
                <Card className="shadow-sm border-0 d-inline w-50">
                  <Card.Body className="w-100">
                    <Card.Title className="text-primary">
                      Immagine del post
                    </Card.Title>
                    {info.image ? (
                      <Card.Img
                        variant="top"
                        src={info.image}
                        alt="Post image"
                        className="w-100"
                      />
                    ) : (
                      ""
                    )}
                  </Card.Body>
                </Card>
                <Card className="shadow-sm border-0 d-inline w-50 h-100 ms-1">
                  <Card.Body className="w-100 h-100">
                    <Card.Title className="text-primary">Commenti</Card.Title>

                    {comment ? (
                      comment
                        .filter((c) => c.elementId === postId)
                        .map((c) => (
                          <Card key={c._id} className="mb-2 shadow-sm border-0">
                            <Card.Body className="p-3">
                              <strong>{c.author}</strong>
                              <p className="mb-0">{c.comment}</p>
                            </Card.Body>
                          </Card>
                        ))
                    ) : (
                      <p>Nessun commento</p>
                    )}
                  </Card.Body>
                </Card>
              </Col>
            </Container>
          </Row>

          {/* <Row className="mt-4">
            <Col>
              <Card className="shadow-sm border-0">
                <Card.Body>
                  <Card.Title className="text-primary">Commenti</Card.Title>

                  {comment
                    .filter((c) => c.elementId === postId)
                    .map((c) => (
                      <Card key={c._id} className="mb-2 shadow-sm border-0">
                        <Card.Body className="p-3">
                          <strong className="text-info">{c.author}</strong>
                          <p className="mb-0">{c.comment}</p>
                        </Card.Body>
                      </Card>
                    ))}
                </Card.Body>
              </Card>
            </Col>
          </Row> */}
        </>
      ) : (
        <div className="text-center">
          <Spinner animation="border" />
        </div>
      )}
    </Container>
  );
}

export default Postdetails;
