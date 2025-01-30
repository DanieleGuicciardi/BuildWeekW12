import { useEffect, useState } from "react";
import { Card, Col, Container, Row, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";

function WorkingDetails() {
  const userId = "679743ee16f6350015fecb7b";
  const detailId = useParams().id;
  const [detail, setDetails] = useState();

  const getDetails = async () => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences/${detailId}`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Nzk3NDNlZTE2ZjYzNTAwMTVmZWNiN2IiLCJpYXQiOjE3Mzc5NjY1NzQsImV4cCI6MTczOTE3NjE3NH0.ecbfCfnccTYR1ELq9AmO_yfP1Qa1s7IFzSArRl_KadE",
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        console.log("Esperienze recuperate:", data);
        setDetails(data);
      } else {
        throw new Error("Errore nel recupero dei dettagli.");
      }
    } catch (error) {
      console.error("Errore:", error);
    }
  };

  useEffect(() => {
    getDetails();
   
  }, []);

  return (
    <Container className="mt-4">
      <h1 className="text-center mb-4">Dettaglio Esperienza</h1>
      {detail ? (
        <>
          <Row xs={1} md={2} lg={3} className="g-4 justify-content-center">
            {[
              { label: "Area selezionata", value: detail.area },
              { label: "Compagnia lavorativa", value: detail.company },
              { label: "Ruolo nella compagnia", value: detail.role },
              {
                label: "Inizio periodo lavorativo",
                value: detail.startDate.slice(0, 10),
              },
              {
                label: "Fine periodo lavorativo",
                value: detail.endDate.slice(0, 10),
              },
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
                  <Card.Title className="text-primary">Descrizione</Card.Title>
                  <Card.Text>{detail.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </>
      ) : (
        <div className="text-center">
          <Spinner animation="border" />
        </div>
      )}
    </Container>
  );
}

export default WorkingDetails;
