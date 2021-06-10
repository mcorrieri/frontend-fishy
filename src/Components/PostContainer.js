import { useState, useEffect } from "react";
import { Card } from "semantic-ui-react";

function PostContainer() {
  const [user, setUser] = useState("");
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
        console.log(posts);
        setPosts(posts);
      });
  }, []);

  const postList = posts.map((post) => {
    return (
      <Card
        key={post.id}
        date={post.date}
        description={post.description}
        image={post.image}
        watertype={post.watertype}
        location={post.location}
      />
    );
  });

  return (
    <div>
      <Card.Group>{postList}</Card.Group>
    </div>
  );
}

export default PostContainer;
