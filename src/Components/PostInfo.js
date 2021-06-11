import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Image } from "semantic-ui-react";

function PostInfo(props) {
  console.log(props);
  const [post, setPost] = useState([]);
  const params = useParams();

  useEffect(() => {
    fetch(`http://localhost:3000/posts/${params.id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.token}`,
      },
    })
      .then((res) => res.json())
      .then(function (post) {
        console.log(post);
        setPost(post);
      });
  }, []);

  return (
    <div>
      <h1>Post info</h1>
      <Image wrapped size="medium" src={post.image} alt="post-image" />
      <p>Description: {post.description}</p>
      <p>Water Type: {post.water_type}</p>
      <p>Location: {post.location}</p>
      <p>Date: {post.date} </p>
      <p>Care level: </p>
    </div>
  );
}

export default PostInfo;
