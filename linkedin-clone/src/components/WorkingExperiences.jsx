import React from "react";

const WorkExperience = () => {
  
  const experiences = [
    {
      id: 1,
      title: "Software Developer",
      company: "Retex",
      description: "Sviluppo",
      startDate: "Gennaio 2020",           /* array di prova statico */
      endDate: "Presente",
    },
  ];

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Esperienze Lavorative</h2>
      <div className="list-group">
        {experiences.map((exp) => (
          <div key={exp.id} className="list-group-item list-group-item-action mb-3 shadow-sm">
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">{exp.title}</h5>
              <small className="text-muted">
                {exp.startDate} - {exp.endDate}
              </small>
            </div>
            <p className="mb-1 text-muted">{exp.company}</p>
            <p className="mb-1">{exp.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkExperience;
