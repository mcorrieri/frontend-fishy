import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Form, Button } from "semantic-ui-react";

function EditPostForm({ loggedInUser, fetchUserPosts }) {
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [comment, setComment] = useState("");
  const params = useParams();
  const history = useHistory();

  useEffect(() => {
    fetch(`http://localhost:3000/posts/${params.id}`, {
      method: "GET",
      headers: {
        Authorization: loggedInUser.token,
      },
    })
      .then((resp) => resp.json())
      .then((post) => {
        // console.log(post);
        setDate(post.date);
        setDescription(post.description);
        setImage(post.image);
        setLocation(post.location);
        setPrice(post.price);
        setComment(post.comment);
      });
  }, [params.id, loggedInUser]);

  //   if (isLoaded) {
  //     console.log(loggedInUser);
  function handleEditPost(e) {
    e.preventDefault();

    let data = {
      date: date,
      description: description,
      image: image,
      location: location,
      price: price,
      comment: comment,
      user_id: loggedInUser.id,
    };
    fetch(`http://localhost:3000/posts/${params.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: loggedInUser.token,
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        return res.json();
      })
      .then((updatedPost) => {
        fetchUserPosts();
        history.push("/posts");
      });
  }

  return (
    <div className="form-container">
      <Form id="postform" onSubmit={handleEditPost}>
        <Form.Group widths="equal">
          <Form.Field>
            <label>Date: </label>
            <input
              type="text"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </Form.Field>
          <Form.Field>
            <label>Description: </label>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Field>
          <Form.Field>
            <label>Image: </label>
            <input
              type="text"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </Form.Field>
          <Form.Field>
            <label>Location: </label>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </Form.Field>
          <Form.Field>
            <label>Price: </label>
            <input
              type="text"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </Form.Field>
          <Form.Field>
            <label>Comment: </label>
            <input
              type="text"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </Form.Field>
        </Form.Group>
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
}

export default EditPostForm;
