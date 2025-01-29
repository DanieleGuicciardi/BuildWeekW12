import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

const Friends = () => {
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(true);

  const token =
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Nzk3NDNlZTE2ZjYzNTAwMTVmZWNiN2IiLCJpYXQiOjE3Mzc5NjY1NzQsImV4cCI6MTczOTE3NjE3NH0.ecbfCfnccTYR1ELq9AmO_yfP1Qa1s7IFzSArRl_KadE";

  const userId = [
    "67994c488e9ccd001520ac84",
    "679743ee16f6350015fecb7b",
    "6799f47cdbf20300152ae838",
  ];

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        setLoading(true);
        const profilesData = await Promise.all(
          userId.map(async (userId) => {
            const response = await fetch(
              `https://striveschool-api.herokuapp.com/api/profile/${userId}`,
              { headers: { Authorization: token } }
            );
            if (!response.ok)
              throw new Error(`Errore nel recupero del profilo ${userId}`);
            return response.json();
          })
        );
        setProfiles(profilesData);
      } catch (error) {
        console.error("Errore nel recupero dei profili:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfiles();
  }, []);

  return (
    <div className="border border-1 border-secondary-subtle rounded-2 p-3 my-3 bg-white">
      <Container>
        <h4 className="mb-3">I tuoi amici</h4>
        
        {loading ? (
          <div>Caricamento...</div>
        ) : (
          profiles.map((profile, index) => (
            <div key={profile._id}>
              <div className="d-flex align-items-start">
                <img
                  src={profile.image || "https://via.placeholder.com/50"}
                  alt="user image"
                  style={{ width: 50 }}
                  className="rounded-5"
                />
                <div className="d-flex flex-column align-items-baseline ms-3">
                  <h5>{profile.name}</h5>
                  <p>{profile.title || "Titolo non disponibile"}</p>
                  <button className="btn bg-white border rounded-4 sidebarButton text-primary">
                    
                    Invia messaggio
                  </button>
                </div>
              </div>
              {index < profiles.length - 1 && <hr />}
            </div>
          ))
        )}
      </Container>
    </div>
  );
};

export default Friends;
