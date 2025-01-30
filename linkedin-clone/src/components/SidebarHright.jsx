import { Card, Button } from "react-bootstrap";
import { useState } from "react";

const SidebarHright = function () {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className="mt-3 ">
      <Card.Body>
        <Card.Title>Linkedin Notizie</Card.Title>
        <Card.Text className="text-muted">Storie principali</Card.Text>

        <h6 className="mb-0">Lorem ipsum, dolor sit amet</h6>
        <span className="text-muted side-text">4 ore fa • 1547 lettori</span>
        <h6 className="mb-0">Lorem ipsum, dolor sit amet</h6>
        <span className="text-muted side-text">4 ore fa • 1547 lettori</span>
        <h6 className="mb-0">Lorem ipsum, dolor sit amet</h6>
        <span className="text-muted side-text">4 ore fa • 1547 lettori</span>
        <h6 className="mb-0">Lorem ipsum, dolor sit amet</h6>
        <span className="text-muted side-text">4 ore fa • 1547 lettori</span>
        <h6 className="mb-0">Lorem ipsum, dolor sit amet</h6>
        <span className="text-muted side-text">4 ore fa • 1547 lettori</span>

        {expanded && (
          <div>
            <h6 className="mb-0">Lorem ipsum, dolor sit amet</h6>
            <span className="text-muted side-text">1 ora fa • 500 lettori</span>
            <h6 className="mb-0">Lorem ipsum, dolor sit amet</h6>
            <span className="text-muted side-text">
              4 ore fa • 1547 lettori
            </span>
            <h6 className="mb-0">Lorem ipsum, dolor sit amet</h6>
            <span className="text-muted side-text">3 ore fa • 350 lettori</span>
            <h6 className="mb-0">Lorem ipsum, dolor sit amet</h6>
            <span className="text-muted side-text">4 ore fa • 300 lettori</span>
          </div>
        )}

        <div className="mt-2">
          <Button variant="link" onClick={toggleExpand}>
            {expanded ? "Vedi meno" : "Vedi altro"}
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default SidebarHright;
