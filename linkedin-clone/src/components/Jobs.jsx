import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [company, setCompany] = useState(""); // Stato per azienda
  const [category, setCategory] = useState(""); // Stato per categoria
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const location = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(location.search);

  const searchQuery = params.get("search");
  const companyQuery = params.get("company");
  const categoryQuery = params.get("category");
  const limit = params.get("limit") || 10;

  const fetchJobs = async () => {
    setLoading(true);
    setError(null);

    let apiUrl = "https://strive-benchmark.herokuapp.com/api/jobs?limit=10";

    if (searchQuery) {
      apiUrl += `&search=${searchQuery}`;
    }
    if (companyQuery) {
      apiUrl += `&company=${companyQuery}`;
    }
    if (categoryQuery) {
      apiUrl += `&category=${categoryQuery}&limit=10`;
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
  }, [searchQuery, companyQuery, categoryQuery, limit]);

  const handleSearch = (e) => {
    e.preventDefault();
    const queryParams = new URLSearchParams();

    if (searchTerm.trim() !== "") {
      queryParams.set("search", searchTerm);
    }
    if (company.trim() !== "") {
      queryParams.set("company", company);
    }
    if (category.trim() !== "") {
      queryParams.set("category", category);
      queryParams.set("limit", 10);
    }

    navigate(`/jobs?${queryParams.toString()}`);
  };

  return (
    <div className="container mt-4">
      <h1 className="mb-4 text-center">Offerte di Lavoro</h1>

      {/* Form per ricerca avanzata */}
      <div className="d-flex justify-content-center mb-4">
        <form className="w-75" onSubmit={handleSearch}>
          <div className="input-group mb-2">
            <input
              type="search"
              className="form-control"
              placeholder="Cerca lavoro"
              aria-label="Cerca"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="input-group mb-2">
            <input
              type="text"
              className="form-control"
              placeholder="Filtra per azienda"
              aria-label="Azienda"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
          </div>
          <div className="input-group mb-2">
            <input
              type="text"
              className="form-control"
              placeholder="Filtra per categoria"
              aria-label="Categoria"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>
          <div className="d-flex justify-content-center">
            <button className="btn btn-primary" type="submit">
              Cerca
            </button>
          </div>
        </form>
      </div>

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
