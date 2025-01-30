import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const location = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(location.search);
  const searchQuery = params.get("search");
  const limit = params.get("limit") || 10;

  const fetchJobs = async () => {
    setLoading(true);
    setError(null);

    let apiUrl = `https://strive-benchmark.herokuapp.com/api/jobs?limit=${limit}`;
    if (searchQuery) {
      apiUrl += `&search=${searchQuery}`;
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
  }, [searchQuery, limit]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim() !== "") {
      navigate(`/jobs?search=${searchTerm}&limit=10`);
    }
  };

  return (
    <div className="container mt-4">

      <div className="d-flex justify-content-center mb-4">     {/* searchbar */}
        <form className="input-group w-50" onSubmit={handleSearch}>
          <input
            type="search"
            className="form-control"
            placeholder="Cerca lavori..."
            aria-label="Cerca"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="btn btn-primary" type="submit">
            <i className="bi bi-search"></i>
          </button>
        </form>
      </div>

      <h1 className="mb-4 text-center">Offerte di Lavoro</h1>

      {loading && <p className="text-center">Caricamento in corso...</p>}
      {error && <p className="text-danger text-center">Errore: {error}</p>}

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
          <p className="text-center">Nessun risultato trovato.</p>
        )}
      </ul>
    </div>
  );
};

export default Jobs;
