import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router";
import { Image } from "semantic-ui-react";

function PostInfo(props) {
  console.log(props);
  const [post, setPost] = useState([]);
  const params = useParams();
  const history = useHistory();

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
  }, [params.id]);

  function deletePost() {
    fetch(`http://localhost:3000/posts/${params.id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((resp) => {
        history.push("/posts");
      });
  }

  //   function handleUpdatePost() {
  //     fetch(`http://localhost:3000/posts/${params.id}`, {
  //       method: "PATCH",
  //       headers: {
  //         "Content-type": "application/json",
  //         // "Authorization": loggedInUser.token
  //       },
  //       body: JSON.stringify({

  //       })
  //     })
  //       .then((res) => res.json())
  //       .then((resp) => {
  //         history.push("/posts");
  //       });
  //   }

  return (
    <div>
      <h1>Post info</h1>
      <Image wrapped size="medium" src={post.image} alt="post-image" />
      <p>Description: {post.description}</p>
      <p>Water Type: {post.water_type}</p>
      <p>Location: {post.location}</p>
      <p>Date: {post.date} </p>
      <p>Care level: </p>
      <div>
        <button onClick={deletePost}>Delete post</button>
        <button>Edit post</button>
      </div>
    </div>
  );
}

export default PostInfo;
