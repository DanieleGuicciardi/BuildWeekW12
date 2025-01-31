import { ListGroup, Button } from "react-bootstrap";

const myAuthor = "3mx9g@e-record.com";

const Comments = ({ commentsToShow, postId, refreshComments }) => {
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
        alert("La recensione è stata elimata!");
        refreshComments();
      } else {
        throw new Error("La recensione non è stata eliminata!");
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
          <ListGroup.Item key={comment._id} className=" text-start text-break">
            {comment.comment}
            {myAuthor === comment.author ? (
              <Button
                variant="danger"
                className="ms-2"
                onClick={() => deleteComment(comment._id)}
              >
                Elimina
              </Button>
            ) : (
              <>
                <div className="text-secondary d-flex justify-content-between align-items-center m-0">
                  <p className="m-0">{comment.author}</p>
                  <p className="m-0">
                    {comment.createdAt.slice(0, 10)} -{" "}
                    {comment.createdAt.slice(12, 16)}
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
