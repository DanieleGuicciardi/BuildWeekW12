import {
  Trash,
  Pencil,
  HandThumbsUp,
  ChatDots,
  Share,
} from "react-bootstrap-icons";

const HomePosts = ({ posts, deletePost, modifyPost }) => {
  const postDate = new Date(posts.createdAt);
  const myId = "679743ee16f6350015fecb7b";

  return (
    <div className="card mb-4 shadow-sm">
      <div className="card-body">
        {/* Header del post */}
        <div className="d-flex align-items-center mb-3">
          <img
            src={posts.user.image || "https://via.placeholder.com/50"}
            alt={posts.user.username}
            className="rounded-circle me-3"
            style={{ width: "50px", height: "50px" }}
          />
          <div>
            <h6 className="mb-0 fw-bold">{posts.user.username}</h6>
            <small className="text-muted">
              {postDate.toLocaleDateString()}
            </small>
          </div>
          {myId === posts.user._id && (
            <div className="ms-auto">
              <Trash
                style={{ cursor: "pointer", color: "red" }}
                title="Elimina post"
                onClick={() => deletePost(posts._id)}
                className="me-2"
              />
              <Pencil
                style={{ cursor: "pointer", color: "#0d6efd" }}
                title="Modifica post"
                onClick={() => modifyPost(posts._id, posts.text)}
              />
            </div>
          )}
        </div>

        {/* Contenuto del post */}
        <p className="card-text">{posts.text}</p>

        {/* Footer del post */}
        <hr />
        <div className="d-flex justify-content-around text-muted">
          <div className="d-flex align-items-center">
            <HandThumbsUp className="me-2" />
            <span>Mi piace</span>
          </div>
          <div className="d-flex align-items-center">
            <ChatDots className="me-2" />
            <span>Commenta</span>
          </div>
          <div className="d-flex align-items-center">
            <Share className="me-2" />
            <span>Condividi</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomePosts;
