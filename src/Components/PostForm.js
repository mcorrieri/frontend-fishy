import { useState } from "react";
import { useHistory } from "react-router";

function PostForm() {
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [watertype, setWatertype] = useState("");
  const [location, setLocation] = useState("");

  const history = useHistory();

  function handleAddPost() {
    fetch("http://localhost:3000/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        date: date,
        description: description,
        image: image,
        watertype: watertype,
        location: location,
      }),
    })
      .then((res) => res.json())
      .then((response) => {
        console.log(response);

        if (!response.message) {
          history.push("/posts");
        }
      });
  }
  return (
    <div className="form-container">
      <form onSubmit={handleAddPost}>
        <label>Date: </label>
        <input
          type="text"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <label>Description: </label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <label>Image: </label>
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <label>Water type: </label>
        <input
          type="text"
          value={watertype}
          onChange={(e) => setWatertype(e.target.value)}
        />
        <label>Location: </label>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <input type="submit" />
      </form>
    </div>
  );
}

export default PostForm;
