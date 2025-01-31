import { useEffect, useState } from "react";
import Profile from "./Profile";
import Sidebar from "./Sidebar";
import { Row, Col } from "react-bootstrap";
import Info from "./Info";
import AdminExperiences from "./AdminExperiences";
import MyPost from "./MyPost";
import Friends from "./Friends";

const AdminArea = () => {
  const [profiles, setProfile] = useState("");
  const [myProfile, setMyProfile] = useState("");

  const getProfilesData = async () => {
    try {
      const [profileRes, myProfileRes] = await Promise.all([
        fetch("https://striveschool-api.herokuapp.com/api/profile/", {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Nzk3NDNlZTE2ZjYzNTAwMTVmZWNiN2IiLCJpYXQiOjE3Mzc5NjY1NzQsImV4cCI6MTczOTE3NjE3NH0.ecbfCfnccTYR1ELq9AmO_yfP1Qa1s7IFzSArRl_KadE",
          },
        }),
        fetch("https://striveschool-api.herokuapp.com/api/profile/me", {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Nzk3NDNlZTE2ZjYzNTAwMTVmZWNiN2IiLCJpYXQiOjE3Mzc5NjY1NzQsImV4cCI6MTczOTE3NjE3NH0.ecbfCfnccTYR1ELq9AmO_yfP1Qa1s7IFzSArRl_KadE",
          },
        }),
      ]);

      if (!profileRes.ok || !myProfileRes.ok) {
        throw new Error("Errore nel recupero dati..");
      }

      const profileData = await profileRes.json();
      const myProfileData = await myProfileRes.json();

      setProfile(profileData);
      setMyProfile(myProfileData);

      console.log("Profili:", profileData);
      console.log("Mio Profilo:", myProfileData);
    } catch (error) {
      console.error("Errore nel recupero dati:", error);
      alert("Errore nel recupero dei dati. Riprova.");
    }
  };

  useEffect(() => {
    getProfilesData();
  }, []);

  return (
    <Row>
      <Col lg={8}>
        <Profile myProfile={myProfile} />
        <Info myProfile={myProfile} />
        <MyPost />
        <AdminExperiences />
      </Col>
      <Col lg={4}>
        <Sidebar myProfile={myProfile} profiles={profiles} />
        <Friends />
      </Col>
    </Row>
  );
};

export default AdminArea;
