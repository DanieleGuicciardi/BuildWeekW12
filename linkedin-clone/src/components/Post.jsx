const Post = function ({ post }) {
  console.log(post);
  return (
    <div className="container mt-4" key={post.id}>
      <div className="list-group">
        <div className="list-group-item list-group-item-action mb-3">
          <div className="d-flex w-100 justify-content-between">
            <p>{post.think}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Post;
