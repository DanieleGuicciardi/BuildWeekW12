import { useEffect, useState } from "react";

const JobsPage = () => {
  const [jobs, setJobs] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  const fetchJobs = async () => {
    try {
      const response = await fetch("https://strive-benchmark.herokuapp.com/api/jobs");
      if (!response.ok) {
        throw new Error("Errore nel recupero dei lavori");
      }
      const data = await response.json();
      setJobs(data.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs(); 
  }, []);

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Offerte di Lavoro</h1>

      {loading && <p>Caricamento in corso...</p>}

      {error && <p className="text-danger">Errore: {error}</p>}

      <ul className="list-group">
        {jobs.map((job) => (
          <li key={job._id} className="list-group-item">
            <h5>{job.title}</h5>
            <p>
              <strong>Azienda:</strong> {job.company_name}
            </p>
            <a href={job.url} target="_blank" className="btn btn-primary btn-sm">
              Vedi Dettagli
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobsPage;
