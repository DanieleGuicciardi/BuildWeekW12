import React from "react";

const Info = ({ bio }) => {
  return (
    <div className="container mt-4">
      <div className="card shadow-sm">
        <div className="card-body">
          <h2 className="card-title mb-4">Informazioni su di me</h2>
          {bio ? (
            <p className="card-text">{bio}</p>
          ) : (
            <p className="card-text text-muted">Nessuna informazione disponibile.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Info;