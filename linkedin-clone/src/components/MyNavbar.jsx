import { NavDropdown, Navbar, Container, Nav, Form } from "react-bootstrap";
import logo from "../assets/LI-In-Bug.png";
import { Link } from "react-router-dom";

const MyNavbar = function () {
  return (
    <>
      <Navbar expand="lg" className="bg-white fixed-top">
        <Container className="justify-content-between">
          {/* Logo */}
          <img src={logo} alt="LinkedIn Logo" className="logo-linkedin me-3" />

          {/* Search Bar */}
          <Form className="d-flex flex-grow-1 me-4">
            <div className="input-group w-100 navbarSearchbar">
              <span className="input-group-text border-0 search">
                <i className="bi bi-search"></i>
              </span>
              <Form.Control
                type="search"
                placeholder="Cerca"
                className="border-0 search"
                aria-label="Cerca"
              />
            </div>
          </Form>

          {/* Navbar Collapse */}
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" className="flex-grow-1">
            <Nav
              className="d-flex justify-content-end align-items-center"
              navbarScroll
            >
              {/* Link con icone */}
              <div className="d-flex align-items-center text-center">
                <Nav.Link
                  as={Link}
                  to={"/"}
                  href="#action1"
                  className="d-flex flex-column align-items-center me-3"
                >
                  <i className="bi bi-house-door-fill fs-5"></i>
                  <span>Home</span>
                </Nav.Link>
                <Nav.Link
                  href="#action2"
                  className="d-flex flex-column align-items-center me-3"
                >
                  <i className="bi bi-people-fill fs-5"></i>
                  <span>Rete</span>
                </Nav.Link>
                <Nav.Link
                  href="#action3"
                  className="d-flex flex-column align-items-center me-3"
                >
                  <i className="bi bi-duffle-fill fs-5"></i>
                  <span>Lavoro</span>
                </Nav.Link>
                <Nav.Link
                  href="#action4"
                  className="d-flex flex-column align-items-center me-3"
                >
                  <i className="bi bi-chat-dots-fill fs-5"></i>
                  <span>Messaggistica</span>
                </Nav.Link>
                <Nav.Link
                  href="#action5"
                  className="d-flex flex-column align-items-center me-3"
                >
                  <i className="bi bi-bell-fill fs-5"></i>
                  <span>Notifiche</span>
                </Nav.Link>
              </div>

              {/* Dropdown - Profilo */}
              <div className="d-flex align-items-center text-center me-3 profileDropdown">
                <div className="d-inline">
                  <i className="bi bi-person-circle fs-5"></i>
                </div>
                <NavDropdown title="Tu">
                  <NavDropdown.Item as={Link} to={"/profile"}>
                    Profilo
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
              </div>

              {/* Dropdown - Altro */}
              <div className="d-flex align-items-center text-center">
                <div className="d-inline">
                  <i className="bi bi-border-all fs-5"></i>
                </div>
                <NavDropdown title="Altro">
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
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
