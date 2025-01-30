const Post = function ({ post }) {
  console.log(post);
  return (
    <div className="container mt-4" key={post.id}>
      <div className="list-group">
        <div className="list-group-item list-group-item-action mb-3">
          <div className="w-100">
            <p>{post.text}</p>
            <div>
              {post.image && <img src={post.image} className="w-100" />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Post;
