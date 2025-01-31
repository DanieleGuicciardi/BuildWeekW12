import { ListGroup } from "react-bootstrap";
import { Trash, Pencil } from "react-bootstrap-icons";
import { useState } from "react";

const myAuthor = "3mx9g@e-record.com";

const Comments = ({ commentsToShow, postId, refreshComments }) => {
  const [editingComment, setEditingComment] = useState(null);
  const [updatedText, setUpdatedText] = useState("");

  const deleteComment = async (commentId) => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" + commentId,
        {
          method: "DELETE",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzliM2I4N2U4NWJhZDAwMTUyOWI0OWMiLCJpYXQiOjE3MzgyMjY1NjcsImV4cCI6MTczOTQzNjE2N30.kTZ9E3oOcwzczHyE8tmOMnN-wHNP482qEsfrnx_1KeY",
          },
        }
      );
      if (response.ok) {
        alert("Il commento è stato eliminato!");
        refreshComments();
      } else {
        throw new Error("Il commento non è stato eliminato!");
      }
    } catch (error) {
      alert(error);
    }
  };

  const editComment = async (commentId) => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" + commentId,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzliM2I4N2U4NWJhZDAwMTUyOWI0OWMiLCJpYXQiOjE3MzgyMjY1NjcsImV4cCI6MTczOTQzNjE2N30.kTZ9E3oOcwzczHyE8tmOMnN-wHNP482qEsfrnx_1KeY",
          },
          body: JSON.stringify({ comment: updatedText }),
        }
      );
      if (response.ok) {
        alert("Il commento è stato aggiornato!");
        refreshComments();
        setEditingComment(null);
      } else {
        throw new Error("Il commento non è stato aggiornato!");
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <ListGroup style={{ color: "black" }} className="mt-2">
      {commentsToShow
        .filter((comment) => comment.elementId === postId)
        .map((comment) => (
          <ListGroup.Item key={comment._id} className="text-start text-break">
            {myAuthor === comment.author ? (
              <div className="d-inline float-end">
                <Pencil
                  className="text-primary me-2"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    setEditingComment(comment._id);
                    setUpdatedText(comment.comment);
                  }}
                />
                <Trash
                  className="text-danger"
                  style={{ cursor: "pointer" }}
                  onClick={() => deleteComment(comment._id)}
                />
              </div>
            ) : null}
            {editingComment === comment._id ? (
              <input
                type="text"
                value={updatedText}
                onChange={(e) => setUpdatedText(e.target.value)}
                onBlur={() => editComment(comment._id)}
                autoFocus
              />
            ) : (
              <>
                <span>{comment.comment}</span>
                <div className="text-secondary d-flex justify-content-between align-items-center m-0">
                  <p className="m-0">{comment.author}</p>
                  <p className="m-0">
                    {comment.createdAt.slice(0, 10)} - {comment.createdAt.slice(12, 16)}
                  </p>
                </div>
              </>
            )}
          </ListGroup.Item>
        ))}
    </ListGroup>
  );
};

export default Comments;
