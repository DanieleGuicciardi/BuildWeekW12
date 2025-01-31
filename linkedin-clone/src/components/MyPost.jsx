import { Container } from "react-bootstrap";
import { useEffect, useState } from "react";

import { Trash } from "react-bootstrap-icons";

const myUsername = "Dani EFFE";

const CreatePost = function () {
  const [posts, setPosts] = useState([]);

  const getPost = async () => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/posts/",
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Nzk3NDNlZTE2ZjYzNTAwMTVmZWNiN2IiLCJpYXQiOjE3Mzc5NjY1NzQsImV4cCI6MTczOTE3NjE3NH0.ecbfCfnccTYR1ELq9AmO_yfP1Qa1s7IFzSArRl_KadE",
          },
        }
      );

      if (response.ok) {
        const result = await response.json();
        const datas = result.reverse();
        setPosts(datas);
        console.log("Result: ", datas);
      } else {
        throw new Error("Errore nel recupero dati");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deletePost = async (id) => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/posts/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Nzk3NDNlZTE2ZjYzNTAwMTVmZWNiN2IiLCJpYXQiOjE3Mzc5NjY1NzQsImV4cCI6MTczOTE3NjE3NH0.ecbfCfnccTYR1ELq9AmO_yfP1Qa1s7IFzSArRl_KadE",
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );
      if (response.ok) {
        await getPost();
      } else {
        throw new Error("Errore durante l'eliminazione del post.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPost();
  }, []);

  return (
    <>
      <Container className="mt-4">
        <div className=" mx-auto bg-white border rounded-3 p-3">
          <h2>I miei Post</h2>
          {posts
            .filter((post) => post.username == myUsername)
            .map((post) => (
              <>
                {/* <Post key={post.id} post={post} /> */}
                <div className="container mt-4" key={post.id}>
                  <div className="list-group">
                    <div className="list-group-item list-group-item-action mb-3">
                      <div className="w-100">
                        <p>{post.text}</p>
                        <div>
                          {post.image && (
                            <img src={post.image} className="w-100" />
                          )}
                        </div>
                      </div>
                      <div>
                        <Trash
                          className=" text-danger"
                          onClick={() => deletePost(post._id)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ))}
        </div>
      </Container>
    </>
  );
};

export default CreatePost;
