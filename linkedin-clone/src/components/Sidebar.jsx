import { Container } from "react-bootstrap";
import { PersonPlusFill } from "react-bootstrap-icons";

const Sidebar = ({ myProfile, profiles }) => {
  return (
    <>
      {myProfile && (
        <div className="border border-1 border-secondary-subtle rounded-2 profileSidebar pt-3">
          <Container>
            <div className="d-flex justify-content-between">
              <div>
                <h5>Lingua del profilo</h5>
                <p>Italiano</p>
              </div>
              <i className="bi bi-pencil myPencil fs-5"></i>
            </div>
            <hr className=" mb-4" />
            <div className="d-flex justify-content-between">
              <div className=" text-break">
                <h5>Profilo pubblico e URL</h5>
                <p>
                  www.linkedin.com/{myProfile.username}/{myProfile._id}
                </p>
              </div>
              <i className="bi bi-pencil myPencil fs-5"></i>
            </div>
          </Container>
        </div>
      )}
      {profiles && (
        <div className="border border-1 border-secondary-subtle rounded-2 p-2 mt-3 mx-2 bg-white">
          <Container>
            <h5>Persone che potresti conoscere</h5>
            <p className="text-secondary">Dal tuo settore</p>
            <div className="d-flex  align-items-start">
              <img
                src={profiles[0].image}
                alt="user image"
                style={{ width: 50 }}
                className="rounded-5"
              />
              <div className="d-flex flex-column align-items-baseline ms-3">
                <h5>{profiles[0].name}</h5>
                <p>{profiles[0].title}</p>
                <button className="btn bg-white border rounded-4 sidebarButton">
                  <PersonPlusFill className="mx-2" />
                  Collegati
                </button>
              </div>
            </div>
            <hr />
            <div className="d-flex  align-items-start">
              <img
                src={profiles[10].image}
                alt="user image"
                style={{ width: 50 }}
                className="rounded-5"
              />
              <div className="d-flex flex-column align-items-baseline ms-3">
                <h5>{profiles[10].name}</h5>
                <p>{profiles[10].title}</p>
                <button className="btn bg-white border rounded-4 sidebarButton">
                  <PersonPlusFill className="mx-2" />
                  Collegati
                </button>
              </div>
            </div>
            <hr />
            <div className="d-flex  align-items-start">
              <img
                src={profiles[2].image}
                alt="user image"
                style={{ width: 50 }}
                className="rounded-5"
              />
              <div className="d-flex flex-column align-items-baseline ms-3">
                <h5>{profiles[2].name}</h5>
                <p>{profiles[2].title}</p>
                <button className="btn bg-white border rounded-4 sidebarButton">
                  <PersonPlusFill className="mx-2" />
                  Collegati
                </button>
              </div>
            </div>
            <hr />
            <div className="d-flex  align-items-start">
              <img
                src={profiles[3].image}
                alt="user image"
                style={{ width: 50 }}
                className="rounded-5"
              />
              <div className="d-flex flex-column align-items-baseline ms-3">
                <h5>{profiles[3].name}</h5>
                <p>{profiles[3].title}</p>
                <button className="btn bg-white border rounded-4 sidebarButton">
                  <PersonPlusFill className="mx-2" />
                  Collegati
                </button>
              </div>
            </div>
          </Container>
        </div>
      )}
    </>
  );
};

export default Sidebar;
