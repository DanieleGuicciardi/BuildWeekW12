import { useEffect, useState } from "react";
import Comments from "./Comments";
import AddComment from "./AddComment";

const CommentArea = ({ postId, showInputComment, selectedComment }) => {
  const [comments, setComments] = useState([]);

  const getComments = async () => {
    //setIsLoading(true)
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzliM2I4N2U4NWJhZDAwMTUyOWI0OWMiLCJpYXQiOjE3MzgyMjY1NjcsImV4cCI6MTczOTQzNjE2N30.kTZ9E3oOcwzczHyE8tmOMnN-wHNP482qEsfrnx_1KeY",
          },
        }
      );
      console.log(response);
      if (response.ok) {
        let comments = await response.json();
        setComments(comments);
        //setIsLoading(false)
        //setIsError(false)
      } else {
        console.log("error");
        //setIsLoading(false)
        //setIsError(true)
      }
    } catch (error) {
      console.log(error);
      //setIsLoading(false)
      //setIsError(true)
    }
  };

  useEffect(() => {
    getComments();
  }, []);

  return (
    <div className="text-center">
      {/*{isLoading && <Loading />}
      {isError && <Error />}*/}
      <AddComment
        postId={selectedComment}
        showInputComment={showInputComment}
        refreshComments={getComments}
      />
      <Comments
        commentsToShow={comments}
        postId={postId}
        refreshComments={getComments}
      />
    </div>
  );
};

export default CommentArea;
