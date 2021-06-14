import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PostCard from "./PostCard";

function PostPage() {
  // const [user, setUser] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/posts", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.token}`,
      },
    })
      .then((res) => res.json())
      .then(function (posts) {
        // console.log(posts);
        setPosts(posts);
      });
  }, []);

  let postCards = posts.map((post) => {
    return <PostCard key={post.id} post={post} id={post.id} />;
  });

  return (
    <div>
      <h1>Post Page</h1>
      <Link to="/postform">Add New Post</Link>
      <ul>{postCards}</ul>
    </div>
  );
}

export default PostPage;
