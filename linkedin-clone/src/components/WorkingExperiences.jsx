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
    <Card className="mb-3 w-100" key={experiences._id}>
      <Card.Body>
        <div className="d-flex justify-content-between align-items-start">
          <div className="flex-grow-1">
            <Card.Text>
              <p className="m-0">
                <b>Ruolo:</b> {experiences.role}
              </p>
            </Card.Text>
            <Card.Text className="text-muted">
              <b>Periodo:</b> {date1.toDateString()} - {date2.toDateString()}
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
          </div>
          <div className="d-flex flex-column align-items-end">
            <div className="mb-2">
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
            <Card.Img
              variant="right"
              src={experiences.image}
              alt="Immagine esperienza di lavoro"
              style={{ maxWidth: "300px", height: "auto", objectFit: "contain", borderRadius: "5px" }}
            />
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default WorkExperience;