import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card } from "semantic-ui-react";
import PostCard from "./PostCard";
import Search from "./Search";

function PostPage() {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
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

  function handleUpdatedSearch(newSearch) {
    setSearchTerm(newSearch);
  }

  return (
    <div>
      <Link to="/postform">Add New Post</Link>
      <Search searchTerm={searchTerm} onUpdatedSearch={handleUpdatedSearch} />
      <Card.Group>{postCards}</Card.Group>
    </div>
  );
}

export default PostPage;
