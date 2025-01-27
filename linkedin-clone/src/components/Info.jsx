import React from "react";

const Info = ({ myProfile }) => {
  return (
    <div className="container mt-4">
      <div className="card shadow-sm">
        <div className="card-body">
          <h2 className="card-title mb-4">Informazioni</h2>
          {myProfile ? (
            <p className="card-text">{myProfile.bio}</p>
          ) : (
            <p className="card-text text-muted">Nessuna informazione disponibile.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Info;