import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router";
import { Image, Button, Card } from "semantic-ui-react";

function PostInfo(props, { loggedInUser }) {
  console.log(props);
  const [post, setPost] = useState([]);
  const [aquarium, setAquarium] = useState([]);
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

  function addToAquarium() {
    setAquarium([...aquarium, post.id]);
  }

  return (
    <div>
      <Card className="ui centered card">
        <Image wrapped size="medium" src={post.image} alt="post-image" />
        <Card.Content>
          <p>Description: {post.description}</p>
          <p>Water Type: {post.water_type}</p>
          <p>Location: {post.location}</p>
          <p>Date: {post.date} </p>
        </Card.Content>
      </Card>
      <div>
        <Button onClick={deletePost}>Delete post</Button>
        <Button>Edit post</Button>
        <br></br>
        <Button onClick={addToAquarium}>I want this fish</Button>
      </div>
    </div>
  );
}

export default PostInfo;
