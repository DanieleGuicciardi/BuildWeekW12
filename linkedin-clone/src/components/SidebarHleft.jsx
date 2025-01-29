import { Card, ListGroup, Button } from "react-bootstrap";
const SidebarHleft = function () {
  return (
    <>
      <Card style={{ width: "18rem" }} className="mt-3">
        <div className="bg-secondary h-50">
          <Card.Img
            style={{
              borderRadius: "50%",
              border: "4px solid white",
              width: "120px",
              height: "120px",
              objectFit: "cover",
            }}
            variant="top"
            src="https://static.vecteezy.com/system/resources/previews/005/129/844/non_2x/profile-user-icon-isolated-on-white-background-eps10-free-vector.jpg"
          />
          <Button className=" home-plus  text-center">
            {/* <i className="bi bi-plus-circle-fill   "></i> */}+
          </Button>
        </div>
        <Card.Body>
          <Card.Title>Flavius Bodescu</Card.Title>
          <Card.Text className="text-muted">Bologna</Card.Text>
          <button className="btn border-dark w-100 text-start btn-home">
            {" "}
            <i className="bi bi-plus pe-3 "></i>Esperienza
          </button>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>
            <h6 className="mb-0">Collegamento</h6>
            <span>Espandi la tua rete </span>
          </ListGroup.Item>
        </ListGroup>
      </Card>

      <Card style={{ width: "18rem" }} className="mt-3">
        <Card.Body>
          <h6>Elementi salvati</h6>
          <h6>Gruppi</h6>
          <h6>Eventi</h6>
        </Card.Body>
      </Card>
    </>
  );
};
export default SidebarHleft;
