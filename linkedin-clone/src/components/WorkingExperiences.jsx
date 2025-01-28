import React from "react";

const WorkExperience = ({ experiences }) => {
  return (
    <div className="container mt-4" key={experiences.id}>
      <div className="list-group">
        <div className="list-group-item list-group-item-action mb-3 shadow-sm">
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">{experiences.role}</h5>
            <small className="text-muted">
              {experiences.startDate} - {experiences.endDate}
            </small>
          </div>
          <p className="mb-1 text-muted">{experiences.company}</p>
          <p className="mb-1">{experiences.description}</p>
          <p className="mb-1">{experiences.area}</p>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
