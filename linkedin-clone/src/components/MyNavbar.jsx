import { NavDropdown, Navbar, Container, Nav, Form } from "react-bootstrap";
import logo from "../assets/LI-In-Bug.png";
const MyNavbar = function () {
  return (
    <>
      <Navbar expand="lg" className="bg-white fixed-top mb-5">
        <Container>
          <img src={logo} alt="" className=" logo-linkedin me-3" />
          {/* search */}
          <Form className="d-flex">
            <div className="input-group">
              <span className="input-group-text  border-0 search">
                <i className="bi bi-search"></i>
              </span>
              <Form.Control
                type="search"
                placeholder="Cerca"
                className="border-0 search"
                aria-label="cerca"
              />
            </div>
          </Form>

          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              {/* link con icone */}

              <div className="d-flex  text-center ">
                <Nav.Link
                  href="#action1"
                  className="d-flex flex-column align-items-center me-sm-3"
                >
                  <i className="bi bi-house-door-fill fs-5"></i>
                  <span>Home</span>
                </Nav.Link>

                <Nav.Link
                  href="#action2"
                  className="d-flex flex-column align-items-center me-sm-3"
                >
                  <i className="bi bi-people-fill fs-5"></i>
                  <span>Rete</span>
                </Nav.Link>

                <Nav.Link
                  href="#action3"
                  className="d-flex flex-column align-items-center me-sm-3"
                >
                  <i className="bi bi-duffle-fill fs-5"></i>
                  <span>Lavoro</span>
                </Nav.Link>

                <Nav.Link
                  href="#action4"
                  className="d-flex flex-column align-items-center me-sm-3"
                >
                  <i className="bi bi-chat-dots-fill fs-5"></i>
                  <span>Messaggistica</span>
                </Nav.Link>

                <Nav.Link
                  href="#action5"
                  className="d-flex flex-column align-items-center me-sm-3"
                >
                  <i className="bi bi-bell-fill fs-5"></i>
                  <span>Notifiche</span>
                </Nav.Link>
              </div>
              {/* dropdown */}
              <div className="text-lg-center me-2 mt-2">
                <div className="d-inline">
                  <i className="bi bi-person-circle fs-5"></i>
                </div>
                <NavDropdown title="Tu " >
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

              <div  className="text-lg-center mt-2">
                <div className="d-inline  " >
                  <i className="bi bi-border-all fs-5"></i>
                </div >
                <NavDropdown title="Tu">
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
