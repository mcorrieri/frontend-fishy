import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Dropdown, Form } from "semantic-ui-react";

function PostForm({
  loggedInUser,
  loggedInUserFish,
  setLoggedInUserFish,
  loggedInUserPosts,
  setLoggedInUserPosts,
  // getNewPosts,
}) {
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [comment, setComment] = useState("");
  const [fish, setFish] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedFish, setSelectedFish] = useState("");

  const history = useHistory();

  useEffect(() => {
    fetch("http://localhost:3000/fish")
      .then((resp) => resp.json())
      .then((fish) => {
        setFish(fish);
        // console.log(fish);
        setIsLoaded(true);
      });
  }, []);

  if (isLoaded) {
    // console.log(loggedInUser);
    function handleAddPost(e) {
      e.preventDefault();
      const data = {
        date: date,
        description: description,
        image: image,
        location: location,
        price: price,
        comment: comment,
        fish_id: selectedFish,
        user_id: loggedInUser.id,
      };
      fetch("http://localhost:3000/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => {
          console.log(res);
          return res.json();
        })
        .then((newPost) => {
          console.log("hey");
          // getNewPosts(newPost);

          setLoggedInUserPosts([...loggedInUserPosts, newPost]);
          history.push("/posts");
        });
    }
    const fishOptions = fish.map((fish) => {
      return {
        key: fish.breed,
        text: fish.breed,
        value: fish.id,
      };
    });

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
            <Form.Field>
              <label>Fish: </label>
              <Dropdown
                placeholder="Fish breed"
                fluid
                options={fishOptions}
                onChange={(e, r) => setSelectedFish(r.value)}
              />
            </Form.Field>
          </Form.Group>
          <input type="submit" />
        </Form>
      </div>
    );
  } else {
    return (
      <div className="page-container unloaded">
        <div className="page-content unloaded"></div>
      </div>
    );
  }
}

export default PostForm;
