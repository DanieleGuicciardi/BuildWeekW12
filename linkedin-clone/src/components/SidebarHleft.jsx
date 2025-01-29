import { Card, ListGroup, Button } from "react-bootstrap";
const SidebarHleft = function () {
  return (
    <>
      <Card style={{ width: "15rem" }}  className="mt-3 ms-5">
        <div className="bg-secondary sidebar-top mb-4 ps-2 ">
          <Card.Img className=" "
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
            src="https://static.vecteezy.com/system/resources/previews/005/129/844/non_2x/profile-user-icon-isolated-on-white-background-eps10-free-vector.jpg"
          />
          <Button className=" home-plus  text-center pb-1">
            +
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
        <div className=" border-top mx-2 p-1 ">
          <ListGroup.Item >
            <h6 className="mb-0">Collegamento</h6>
            <span>Espandi la tua rete </span>
          </ListGroup.Item>
        </div>
      </Card>

      <Card style={{ width: "15rem" }} className="mt-3 ms-5">
        <Card.Body>
          <h6><i className="bi bi-cloud-download-fill"></i> Elementi salvati</h6>
          <h6><i className="bi bi-people-fill"></i> Gruppi</h6>
          <h6><i className="bi bi-calendar3-event"></i> Eventi</h6>
        </Card.Body>
      </Card>
    </>
  );
};
export default SidebarHleft;
