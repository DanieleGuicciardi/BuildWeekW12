import React from "react";

const WorkExperience = () => {
  const experiences = [
    {
      id: 1,
      title: "Software Developer",
      company: "Retex",
      description: "Sviluppo",
      startDate: "Gennaio 2020", // array di prova statico
      endDate: "Presente",
    },
  ];

  return (
    <div className="container mt-4">
      <div className="card shadow-sm">
        <div className="card-body">
          {/* Titolo */}
          <h2 className="card-title mb-4">Esperienze Lavorative</h2>

          {/* Esperienze lavorative */}
          {experiences.length > 0 ? (
            experiences.map((exp) => (
              <div key={exp.id} className="mb-2">
                <div className="d-flex w-100 justify-content-between">
                  <h5 className="mb-1">{exp.title}</h5>
                  <small className="text-muted">
                    {exp.startDate} - {exp.endDate}
                  </small>
                </div>
                <p className="mb-1 text-muted">{exp.company}</p>
                <p className="mb-1">{exp.description}</p>
              </div>
            ))
          ) : (
            <p className="card-text text-muted">Nessuna esperienza disponibile.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;