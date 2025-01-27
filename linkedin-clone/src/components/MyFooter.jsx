import { Col, Container, Dropdown, DropdownButton, Row } from "react-bootstrap";

function MyFooter() {
  return (
    <Container style={{ backgroundColor: "#F4F2EE" }}>
      <div className=" d-inline-block w-50" style={{ minHeight: "17em" }}>
        <Col>
          <Row xs={1} md={3}>
            <Col className=" mt-3 ">
              <a href="javascript:void(0)" className="page-link">
                Informazioni
              </a>
            </Col>
            <Col className=" mt-3">
              <a href="javascript:void(0)" className="page-link">
                Accessibilità
              </a>
            </Col>
            <Col className=" mt-3">
              <a href="javascript:void(0)" className="page-link">
                Talent Solutions
              </a>
            </Col>
            <Col className=" mt-3">
              <a href="javascript:void(0)" className="page-link">
                Informativa sulla community professionale
              </a>
            </Col>
            <Col className=" mt-3">
              <a href="javascript:void(0)" className="page-link">
                Carriera
              </a>
            </Col>
            <Col className=" mt-3">
              <a href="javascript:void(0)" className="page-link">
                Soluzioni di marketing
              </a>
            </Col>
            <Col className=" mt-3">
              <a href="javascript:void(0)" className="page-link">
                Privacy e codizioni
              </a>
            </Col>
            <Col className=" mt-3">
              <a href="javascript:void(0)" className="page-link">
                Opzioni per gli annunci pubblicitari
              </a>
            </Col>
            <Col className=" mt-3">
              <a href="javascript:void(0)" className="page-link">
                Pubblicità
              </a>
            </Col>
            <Col className=" mt-3">
              <a href="javascript:void(0)" className="page-link">
                Sales Solution
              </a>
            </Col>
            <Col className=" mt-3">
              <a href="javascript:void(0)" className="page-link">
                Mobile
              </a>
            </Col>
            <Col className=" mt-3">
              <a href="javascript:void(0)" className="page-link">
                Piccole imprese
              </a>
            </Col>
            <Col className=" mt-3">
              <a href="javascript:void(0)" className="page-link">
                Centro sicurezza
              </a>
            </Col>
          </Row>
        </Col>
      </div>
      <div className="d-inline-block w-50" style={{ minHeight: "17em" }}>
        <Col>
          <Row>
            <Col>
              <ul>
                <li className=" list-group-item" style={{ fontSize: "23px" }}>
                  <i className="bi bi-question-circle-fill d-inline"></i>
                  <a
                    href="javascript:void(0)"
                    className="page-link d-inline ms-1 d-inline"
                  >
                    Domande?
                  </a>
                  <p style={{ fontSize: "13px" }}>
                    visita il nostro centro assistenza
                  </p>
                </li>
              </ul>
              <ul>
                <li className=" list-group-item" style={{ fontSize: "23px" }}>
                  <i className="bi bi-gear"></i>
                  <a
                    href="javascript:void(0)"
                    className="page-link ms-1 d-inline"
                  >
                    Gestisci il tuo account e la tua privacy
                  </a>
                  <p style={{ fontSize: "13px" }}>vai alle impostazioni</p>
                </li>
              </ul>
              <ul>
                <li className=" list-group-item" style={{ fontSize: "23px" }}>
                  <i className="bi bi-shield-shaded"></i>
                  <a
                    href="javascript:void(0)"
                    className="page-link ms-1 d-inline"
                  >
                    Trasparenza sui contenuti consigliati
                  </a>
                  <p style={{ fontSize: "13px" }}>
                    Scopri di più sui contenuti consigliati.
                  </p>
                </li>
              </ul>
            </Col>
            <Col xs={4}>
              <p>Seleziona lingua</p>
              <DropdownButton
                id="dropdown-basic-button"
                title="Lingue"
                variant="light"
                style={{ border: " 1px, solid black", width: "89px" }}
              >
                <Dropdown.Item href="javascript:void(0)">
                  Afrikaans
                </Dropdown.Item>
                <Dropdown.Item href="javascript:void(0)">
                  Albanese
                </Dropdown.Item>
                <Dropdown.Item href="javascript:void(0)">Arabo</Dropdown.Item>
                <Dropdown.Item href="javascript:void(0)">
                  Bengalese
                </Dropdown.Item>
                <Dropdown.Item href="javascript:void(0)">Bulgaro</Dropdown.Item>
                <Dropdown.Item href="javascript:void(0)">Ceco</Dropdown.Item>
                <Dropdown.Item href="javascript:void(0)">
                  Cinese (Mandarino)
                </Dropdown.Item>
                <Dropdown.Item href="javascript:void(0)">Coreano</Dropdown.Item>
                <Dropdown.Item href="javascript:void(0)">Danese</Dropdown.Item>
                <Dropdown.Item href="javascript:void(0)">Ebraico</Dropdown.Item>
                <Dropdown.Item href="javascript:void(0)">
                  Filippino
                </Dropdown.Item>
                <Dropdown.Item href="javascript:void(0)">
                  Finlandese
                </Dropdown.Item>
                <Dropdown.Item href="javascript:void(0)">
                  Francese
                </Dropdown.Item>
                <Dropdown.Item href="javascript:void(0)">
                  Giapponese
                </Dropdown.Item>
                <Dropdown.Item href="javascript:void(0)">Greco</Dropdown.Item>
                <Dropdown.Item href="javascript:void(0)">Hindi</Dropdown.Item>
                <Dropdown.Item href="javascript:void(0)">
                  Indonesiano
                </Dropdown.Item>
                <Dropdown.Item href="javascript:void(0)">Inglese</Dropdown.Item>
                <Dropdown.Item href="javascript:void(0)">
                  Italiano
                </Dropdown.Item>
                <Dropdown.Item href="javascript:void(0)">Malese</Dropdown.Item>
                <Dropdown.Item href="javascript:void(0)">
                  Norvegese
                </Dropdown.Item>
                <Dropdown.Item href="javascript:void(0)">
                  Olandese
                </Dropdown.Item>
                <Dropdown.Item href="javascript:void(0)">
                  Persiano
                </Dropdown.Item>
                <Dropdown.Item href="javascript:void(0)">Polacco</Dropdown.Item>
                <Dropdown.Item href="javascript:void(0)">
                  Portoghese
                </Dropdown.Item>
                <Dropdown.Item href="javascript:void(0)">Rumeno</Dropdown.Item>
                <Dropdown.Item href="javascript:void(0)">Russo</Dropdown.Item>
                <Dropdown.Item href="javascript:void(0)">Serbo</Dropdown.Item>
                <Dropdown.Item href="javascript:void(0)">
                  Spagnolo
                </Dropdown.Item>
                <Dropdown.Item href="javascript:void(0)">Svedese</Dropdown.Item>
                <Dropdown.Item href="javascript:void(0)">
                  Tailandese
                </Dropdown.Item>
                <Dropdown.Item href="javascript:void(0)">Tamil</Dropdown.Item>
                <Dropdown.Item href="javascript:void(0)">Tedesco</Dropdown.Item>
                <Dropdown.Item href="javascript:void(0)">Turco</Dropdown.Item>
                <Dropdown.Item href="javascript:void(0)">Ucraino</Dropdown.Item>
                <Dropdown.Item href="javascript:void(0)">
                  Ungherese
                </Dropdown.Item>
                <Dropdown.Item href="javascript:void(0)">Urdu</Dropdown.Item>
                <Dropdown.Item href="javascript:void(0)">
                  Vietnamita
                </Dropdown.Item>
              </DropdownButton>
            </Col>
          </Row>
        </Col>
      </div>
      <p style={{ fontSize: "10px" }}>LInkedln Corporations © 2025</p>
    </Container>
  );
}

export default MyFooter;
