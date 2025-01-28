import { useEffect, useState } from "react";
import Profile from "./Profile";
import Sidebar from "./Sidebar";
import { Row, Col } from "react-bootstrap";
import Info from "./Info";
import AdminExperiences from "./AdminExperiences";
import CreatePost from "./CreatePost";

const AdminArea = () => {
  const [profiles, setProfile] = useState("");
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
  }, []);

  return (
    <Row>
      <Col lg={8}>
        <Profile myProfile={myProfile} />
        <Info myProfile={myProfile} />
        <CreatePost />
        <AdminExperiences />
      </Col>
      <Col lg={4}>
        <Sidebar myProfile={myProfile} profiles={profiles} />
      </Col>
    </Row>
  );
};

export default AdminArea;
