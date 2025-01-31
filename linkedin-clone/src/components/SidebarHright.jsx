import { Card, Button } from "react-bootstrap";
import { useState } from "react";
import { Newspaper } from "react-bootstrap-icons";

const SidebarHright = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  const news = [
    { title: "Apple presenta il nuovo iPhone 15", url: "https://www.apple.com/it/iphone-15/" },
    { title: "Elon Musk annuncia nuove funzionalità per X (ex Twitter)", url: "https://x.com" },
    { title: "Scoperta una nuova particella al CERN", url: "https://home.cern/news" },
    { title: "Netflix aumenta i prezzi in Italia", url: "https://www.netflix.com/it/" },
    { title: "Intelligenza artificiale: OpenAI lancia ChatGPT-5", url: "https://openai.com/blog/" },
    { title: "La NASA invia una nuova missione su Marte", url: "https://mars.nasa.gov/" },
    { title: "La Juventus vince il derby d'Italia", url: "https://www.juventus.com/it/" },
    { title: "Google lancia un nuovo aggiornamento per Android", url: "https://blog.google/products/android/" }
  ];

  return (
    <Card className="mt-3 border-0 shadow-sm rounded">
      <Card.Body>
        <Card.Title className="d-flex align-items-center mb-3">
          <Newspaper className="me-2 text-primary" size={20} />
          Notizie principali
        </Card.Title>

        {news.slice(0, expanded ? news.length : 5).map((article, index) => (
          <div key={index} className="mb-2">
            <h6 className="mb-0">
              <a href={article.url} target="_blank" rel="noopener noreferrer" className="news-link">
                {article.title}
              </a>
            </h6>
            <span className="text-muted side-text">Pochi minuti fa</span>
          </div>
        ))}

        <div className="mt-2">
          <Button variant="link" onClick={toggleExpand} className="toggle-button">
            {expanded ? "Vedi meno" : "Vedi altro"}
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default SidebarHright;
