import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card } from "semantic-ui-react";
import PostCard from "./PostCard";

function PostPage() {
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
        setPosts(posts);
      });
  }, []);

  let postCards = posts.map((post) => {
    return <PostCard key={post.id} post={post} id={post.id} />;
  });

  return (
    <div>
      <Link to="/postform">Add New Post</Link>
      <Card.Group itemsPerRow={3}>{postCards}</Card.Group>
    </div>
  );
}

export default PostPage;
