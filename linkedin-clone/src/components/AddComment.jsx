import { useEffect, useState } from "react";
import { Button, Form, Spinner } from "react-bootstrap";

const AddComment = ({ postId, showInputComment, refreshComments }) => {
  const [comment, setComment] = useState({
    comment: "",
    rate: 1,
    elementId: null,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setComment((c) => ({
      ...c,
      elementId: postId,
    }));
  }, [postId]);

  const sendComment = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;
    
    if (!comment.comment.trim()) {
      alert("Il commento non può essere vuoto!");
      return;
    }

    setIsSubmitting(true);
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments",
        {
          method: "POST",
          body: JSON.stringify(comment),
          headers: {
            "Content-type": "application/json",
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzliM2I4N2U4NWJhZDAwMTUyOWI0OWMiLCJpYXQiOjE3MzgyMjY1NjcsImV4cCI6MTczOTQzNjE2N30.kTZ9E3oOcwzczHyE8tmOMnN-wHNP482qEsfrnx_1KeY",
          },
        }
      );
      
      if (response.ok) {
        alert("Commento inviato!");
        setComment({
          comment: "",
          rate: 1,
          elementId: postId,
        });
        refreshComments();
      } else {
        throw new Error("Qualcosa è andato storto");
      }
    } catch (error) {
      console.error("Errore durante l'invio del commento:", error);
      alert("Si è verificato un errore durante l'invio del commento. Riprova.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {showInputComment && (
        <Form className="my-3" onSubmit={sendComment} style={{ maxWidth: "400px", margin: "0 auto" }}>
          <Form.Group className="mb-2">
            <Form.Control
              type="text"
              placeholder="Scrivi un commento..."
              value={comment.comment}
              onChange={(e) =>
                setComment({
                  ...comment,
                  comment: e.target.value,
                })
              }
              className="border-0 border-bottom p-2"
              style={{ outline: "none", boxShadow: "none" }}
              disabled={isSubmitting}
            />
          </Form.Group>
          <Button variant="primary" type="submit" className="w-100" disabled={isSubmitting}>
            {isSubmitting ? <Spinner animation="border" size="sm" /> : "Invia"}
          </Button>
        </Form>
      )}
    </>
  );
};

export default AddComment;
