import { Pencil, Trash, InfoCircle } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";

const WorkExperience = ({
  experiences,
  deleteExperience,
  // setShowModal,
  modifyExperience,
  // setModify,
}) => {
  const date1 = new Date(experiences.startDate);
  const date2 = new Date(experiences.endDate);
  const navigate = useNavigate();

  return (
    <div
      className="container mt-4"
      key={experiences._id}
      style={{
        backgroundImage: `url(${experiences.image})`, // Imposta il background
        backgroundSize: "cover", // Assicura che l'immagine copra il div
        backgroundPosition: "center", // Centra l'immagine
        borderRadius: "10px", // Opzionale: bordi arrotondati
        padding: "20px", // Padding per evitare che il testo sia troppo attaccato ai bordi
        color: "white", // Colore del testo per maggiore leggibilità
        textShadow: "2px 2px 4px rgba(0,0,0,0.5)", // Aggiunge un'ombra per migliorare il contrasto
      }}
    >
      <div className="list-group">
        <div className="list-group-item list-group-item-action mb-3 shadow-sm opacity-75">
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">{experiences.role}</h5>
            <small className="text-muted">
              {date1.toDateString()} - {date2.toDateString()}
            </small>
          </div>

          <p className="mb-1 text-muted">{experiences.company}</p>
          <p className="mb-1">{experiences.description}</p>
          <p className="mb-1">{experiences.area}</p>
          
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
    </div>
  );
};

export default WorkExperience;
