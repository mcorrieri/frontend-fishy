import { useState, useEffect } from "react";

function PostCard({ post_id }) {
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/posts/${post_id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((displayPost) => {
        console.log(displayPost);
        setPost(displayPost);
      });
  }, []);

  return <h1>single post</h1>;
}

export default PostCard;
