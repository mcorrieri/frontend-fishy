import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Form } from "semantic-ui-react";

function PostForm() {
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [water_type, setWatertype] = useState("");
  const [location, setLocation] = useState("");

  const history = useHistory();

  function handleAddPost(e) {
    e.preventDefault();
    fetch("http://localhost:3000/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        date: date,
        description: description,
        image: image,
        water_type: water_type,
        location: location,
      }),
    })
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((newPost) => {
        console.log("hey");

        history.push("/posts");
      });
  }
  return (
    <div className="form-container">
      <Form onSubmit={handleAddPost}>
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
            <label>Water type: </label>
            <input
              type="text"
              value={water_type}
              onChange={(e) => setWatertype(e.target.value)}
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
        </Form.Group>
        <input type="submit" />
      </Form>
    </div>
  );
}

export default PostForm;
