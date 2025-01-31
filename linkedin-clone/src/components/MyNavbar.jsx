import { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { NavDropdown, Navbar, Container, Nav, Form } from "react-bootstrap";
import logo from "../assets/LI-In-Bug.png";

const MyNavbar = function () {
  const [profileImage, setProfileImage] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const location = useLocation(); // Ottiene la pagina attuale

  useEffect(() => {
    const fetchProfileImage = async () => {
      try {
        const response = await fetch(
          "https://striveschool-api.herokuapp.com/api/profile/me",
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Nzk3NDNlZTE2ZjYzNTAwMTVmZWNiN2IiLCJpYXQiOjE3Mzc5NjY1NzQsImV4cCI6MTczOTE3NH0.ecbfCfnccTYR1ELq9AmO_yfP1Qa1s7IFzSArRl_KadE",
            },
          }
        );
        if (response.ok) {
          const data = await response.json();
          setProfileImage(data.image);
        } else {
          console.error("Errore nel recupero dell'immagine del profilo.");
        }
      } catch (error) {
        console.error("Errore:", error);
      }
    };

    fetchProfileImage();
  }, []);

  // Funzione per la search bar
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim() !== "") {
      navigate(`/jobs?search=${searchTerm}`);
    }
  };

  return (
    <>

      <Navbar expand="md" className="bg-white sticky-top ">
        <Container className="justify-content-between">

          <Link to="/">
            <img src={logo} alt="LinkedIn Logo" className="logo-linkedin me-3" />
          </Link>

          <div className="flex-grow-1 me-4">
            {location.pathname !== "/jobs" ? (
              <Form className="d-flex w-100" onSubmit={handleSearch}>
                <div className="input-group navbarSearchbar">
                  <span className="input-group-text border-0 search">
                    <i className="bi bi-search"></i>
                  </span>
                  <Form.Control
                    type="search"
                    placeholder="Cerca lavori..."
                    className="border-0 search"
                    aria-label="Cerca"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </Form>
            ) : (
              <div style={{ height: "38px", visibility: "hidden" }}></div> // Mantiene spazio
            )}
          </div>

          {/* Toggle Navbar per mobile */}
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" className="ms-auto"> {/* Spinge tutto a destra */}
            <Nav className="d-flex align-items-center justify-content-end w-100">
              {/* Link con icone */}
              <Nav.Link as={Link} to="/" className="d-flex flex-column align-items-center me-3">
                <i className="bi bi-house-door-fill fs-5"></i>
                <span>Home</span>
              </Nav.Link>
              <Nav.Link href="#action2" className="d-flex flex-column align-items-center me-3">
                <i className="bi bi-people-fill fs-5"></i>
                <span>Rete</span>
              </Nav.Link>
              <Nav.Link as={Link} to="/jobs" className="d-flex flex-column align-items-center me-3">
                <i className="bi bi-duffle-fill fs-5"></i>
                <span>Lavoro</span>
              </Nav.Link>
              <Nav.Link href="#action4" className="d-flex flex-column align-items-center me-3">
                <i className="bi bi-chat-dots-fill fs-5"></i>
                <span>Messaggistica</span>
              </Nav.Link>
              <Nav.Link href="#action5" className="d-flex flex-column align-items-center me-3">
                <i className="bi bi-bell-fill fs-5"></i>
                <span>Notifiche</span>
              </Nav.Link>

              {/* Dropdown Profilo */}
              <div className="d-flex align-items-center text-center me-3 profileDropdown">
                {profileImage ? (
                  <img
                    src={profileImage}
                    alt="Profile"
                    className="rounded-circle"
                    style={{
                      width: "32px",
                      height: "32px",
                      objectFit: "cover",
                      marginRight: "8px",
                    }}
                  />
                ) : (
                  <i className="bi bi-person-circle fs-5"></i>
                )}
                <NavDropdown title="Tu">
                  <NavDropdown.Item as={Link} to="/profile">
                    Profilo
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
                </NavDropdown>
              </div>

              {/* Dropdown Altro */}
              <div className="d-flex align-items-center text-center">
                <div className="d-inline">
                  <i className="bi bi-border-all fs-5"></i>
                </div>
                <NavDropdown title="Altro">
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
                </NavDropdown>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default MyNavbar;
