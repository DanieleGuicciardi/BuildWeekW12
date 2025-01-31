import { useEffect, useState } from "react";
import { Card, ListGroup, Button } from "react-bootstrap";
const SidebarHleft = function () {
  const [profile, setProfile] = useState("");

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
        setProfile(data);
        console.log("Mio Profilo:", data);
      } else {
        throw new Error("Errore nel recupero dati..");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMyProfile();
  }, []);

  return (
    <>
      <Card className="mt-3">
        <div className="bg-secondary sidebar-top mb-4 ps-2 ">
          <Card.Img
            className=" "
            style={{
              borderRadius: "50%",
              border: "2px solid grey",
              width: "90px",
              height: "90px",
              objectFit: "cover",
              position: "absolute",
              top: "5%",
            }}
            variant="top"
            src={profile.image}
          />
          <Button className="home-plus text-center pb-1">+</Button>
        </div>
        <Card.Body>
          <Card.Title>
            {profile.name} {profile.surname}
          </Card.Title>
          <Card.Text className="text-muted">{profile.area}</Card.Text>
          <button className="btn border-dark w-100 text-start btn-home">
            
            <i className="bi bi-plus pe-3 "></i>Esperienza
          </button>
        </Card.Body>
        <div className=" border-top mx-2 p-1 ">
          <ListGroup.Item>
            <h6 className="mb-0">Collegamento</h6>
            <span>Espandi la tua rete </span>
          </ListGroup.Item>
        </div>
      </Card>

      <Card className="mt-3 d-sm-none d-lg-block">
        <Card.Body>
          <h6>
            <i className="bi bi-cloud-download-fill"></i> Elementi salvati
          </h6>
          <h6>
            <i className="bi bi-people-fill"></i> Gruppi
          </h6>
          <h6>
            <i className="bi bi-calendar3-event"></i> Eventi
          </h6>
        </Card.Body>
      </Card>
    </>
  );
};
export default SidebarHleft;
