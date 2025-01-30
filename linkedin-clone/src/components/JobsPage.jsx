import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const JobsPage = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const searchQuery = params.get("search");

  const fetchJobs = async () => {
    setLoading(true);
    setError(null);

    let apiUrl = "https://strive-benchmark.herokuapp.com/api/jobs";
    if (searchQuery) {
      apiUrl += `?search=${searchQuery}`;
    }

    try {
      const response = await fetch(apiUrl);
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
  }, [searchQuery]);

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Offerte di Lavoro</h1>

      {loading && <p>Caricamento in corso...</p>}
      {error && <p className="text-danger">Errore: {error}</p>}

      <ul className="list-group">
        {jobs.length > 0 ? (
          jobs.map((job) => (
            <li key={job._id} className="list-group-item">
              <h5>{job.title}</h5>
              <p><strong>Azienda:</strong> {job.company_name}</p>
              <a href={job.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">
                Vedi Dettagli
              </a>
            </li>
          ))
        ) : (
          <p>Nessun risultato trovato.</p>
        )}
      </ul>
    </div>
  );
};

export default JobsPage;
