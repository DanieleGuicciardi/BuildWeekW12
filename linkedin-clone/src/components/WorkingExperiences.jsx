import { Pencil, Trash, InfoCircle } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";

const WorkExperience = ({
  experiences,
  deleteExperience,
  modifyExperience,
}) => {
  const date1 = new Date(experiences.startDate);
  const date2 = new Date(experiences.endDate);
  const navigate = useNavigate();

  return (
    <Card className="mb-3" key={experiences._id}>
      <Card.Body>
        <Card.Text>
          <div className="d-flex align-items-center justify-content-between">
            <p className="m-0">
              <b>Ruolo:</b> {experiences.role}
            </p>
            <div>
              <Trash
                onClick={() => deleteExperience(experiences._id)}
                style={{ cursor: "pointer", color: "red" }}
              />
              <Pencil
                className="mx-2"
                onClick={() => modifyExperience(experiences)}
                style={{ cursor: "pointer" }}
              />
              <InfoCircle
                onClick={() => navigate(`/workingdetails/${experiences._id}`)}
                style={{ cursor: "pointer" }}
                className="text-info"
              />
            </div>
          </div>
        </Card.Text>
        <Card.Text>
          <p className="text-muted">
            <b>Periodo:</b> {date1.toDateString()} - {date2.toDateString()}
          </p>
        </Card.Text>
        <Card.Text>
          <b>Azienda:</b> {experiences.company}
        </Card.Text>
        <Card.Text>
          <b>Descrizione:</b> {experiences.description}
        </Card.Text>
        <Card.Text>
          <b>Città:</b> {experiences.area}
        </Card.Text>
      </Card.Body>
      <Card.Img
        variant="bottom"
        src={experiences.image}
        alt="Immagine esperienza di lavoro"
        style={{ maxHeight: "400px" }}
      />
    </Card>
  );
};

export default WorkExperience;
