import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "semantic-ui-react";
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

  // useEffect(() => {
  //   setPosts([...posts, newPost]);
  // }, [newPost]);

  const displayedPosts = posts.filter((post) => {
    if (
      post.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.fish.breed.toLowerCase().includes(searchTerm.toLowerCase())
    ) {
      return post;
    }
  });

  console.log(posts);

  let postCards = displayedPosts.map((post) => {
    return <PostCard key={post.id} post={post} id={post.id} />;
  });

  return (
    <div>
      <div className="postpage-links">
        <Button>
          <Link className="new-post-link" to="/postform">
            Add New Post
          </Link>
        </Button>
        <Search searchTerm={searchTerm} onUpdatedSearch={setSearchTerm} />
      </div>
      <Card.Group>{postCards}</Card.Group>
    </div>
  );
}

export default PostPage;
