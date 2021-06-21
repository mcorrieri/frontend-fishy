import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router";
import { Image, Button, Card } from "semantic-ui-react";

function PostInfo({ loggedInUser }) {
  const [post, setPost] = useState([]);
  // const [aquarium, setAquarium] = useState([]);
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

  function handleEditPost() {
    history.push(`/posts/${params.id}`);
  }
  // console.log(post);

  function assignOwner() {
    let fishdata = {
      owner_id: loggedInUser.id,
    };
    fetch(`http://localhost:3000/fish/${post.fish_id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: loggedInUser.token,
      },
      body: JSON.stringify(fishdata),
    })
      .then((res) => res.json())
      .then((updatedFish) => {
        history.push("/posts");
      });
  }
  return (
    <div>
      <Card className="ui centered card">
        <Image wrapped size="medium" src={post.image} alt="post-image" />
        <Card.Content>
          <p>Description: {post.description}</p>
          <p>Location: {post.location}</p>
          <p>Date: {post.date} </p>
        </Card.Content>
      </Card>
      <div>
        <div>
          {loggedInUser.id === post.user_id ? (
            <Button onClick={deletePost}>Delete post</Button>
          ) : null}
          {loggedInUser.id === post.user_id ? (
            <Button onClick={handleEditPost}>Edit post</Button>
          ) : null}
        </div>
        <br></br>
        <Button onClick={assignOwner}>I want this fish</Button>
      </div>
    </div>
  );
}

export default PostInfo;
