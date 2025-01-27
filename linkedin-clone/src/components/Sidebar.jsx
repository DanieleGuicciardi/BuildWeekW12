//import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Pencil, PersonPlusFill } from "react-bootstrap-icons";

const Sidebar = ({ myProfile, profiles }) => {
  {
    /*const [profile, setProfile] = useState("");
  const [myProfile, setMyProfile] = useState("");

  const getProfile = async () => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/",
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
        console.log("Profili:", data);
      } else {
        throw new Error("Errore nel recupero dati..");
      }
    } catch (error) {
      console.log(error);
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
  };

  useEffect(() => {
    getProfile();
    getMyProfile();
  }, []);*/
  }

  return (
    <>
      {myProfile && (
        <div className="border border-1 border-secondary-subtle rounded-2 p-4 bg-white ">
          <Container>
            <div className="d-flex justify-content-between">
              <div>
                <h5>Lingua del profilo</h5>
                <p>Italiano</p>
              </div>
              <Pencil className=" fs-4" />
            </div>
            <hr className=" mb-4" />
            <div className="d-flex justify-content-between">
              <div>
                <h5>Profilo pubblico e URL</h5>
                <p>
                  www.linkedin.com/{myProfile.username}/<br />
                  {myProfile._id}
                </p>
              </div>
              <Pencil className=" fs-4" />
            </div>
          </Container>
        </div>
      )}
      {profiles && (
        <div className="border border-1 border-secondary-subtle rounded-2 p-2 mt-3 bg-white">
          <Container>
            <h6>Persone che potresti conoscere</h6>
            <p className="text-secondary">Dal tuo settore</p>
            <div className="d-flex  align-items-start">
              <img
                src={profiles[0].image}
                alt="user image"
                style={{ width: 50 }}
                className="rounded-5"
              />
              <div className="d-flex flex-column align-items-baseline ms-3">
                <h5>{profiles[0].name}</h5>
                <p>{profiles[0].title}</p>
                <button className="btn bg-white border rounded-4">
                  <PersonPlusFill className="mx-2" />
                  Collegati
                </button>
              </div>
            </div>
            <hr />
            <div className="d-flex  align-items-start">
              <img
                src={profiles[10].image}
                alt="user image"
                style={{ width: 50 }}
                className="rounded-5"
              />
              <div className="d-flex flex-column align-items-baseline ms-3">
                <h5>{profiles[10].name}</h5>
                <p>{profiles[10].title}</p>
                <button className="btn bg-white border rounded-4">
                  <PersonPlusFill className="mx-2" />
                  Collegati
                </button>
              </div>
            </div>
            <hr />
            <div className="d-flex  align-items-start">
              <img
                src={profiles[2].image}
                alt="user image"
                style={{ width: 50 }}
                className="rounded-5"
              />
              <div className="d-flex flex-column align-items-baseline ms-3">
                <h5>{profiles[2].name}</h5>
                <p>{profiles[2].title}</p>
                <button className="btn bg-white border rounded-4">
                  <PersonPlusFill className="mx-2" />
                  Collegati
                </button>
              </div>
            </div>
            <hr />
            <div className="d-flex  align-items-start">
              <img
                src={profiles[3].image}
                alt="user image"
                style={{ width: 50 }}
                className="rounded-5"
              />
              <div className="d-flex flex-column align-items-baseline ms-3">
                <h5>{profiles[3].name}</h5>
                <p>{profiles[3].title}</p>
                <button className="btn bg-white border rounded-4">
                  <PersonPlusFill className="mx-2" />
                  Collegati
                </button>
              </div>
            </div>
          </Container>
        </div>
      )}
    </>
  );
};

export default Sidebar;
