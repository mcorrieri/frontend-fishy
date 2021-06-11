// import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Modal, Image, Card } from "semantic-ui-react";

function PostCard({ post, id }) {
  console.log(post);
  const { date, description, image, water_type, location } = post;
  // const [post, setPost] = useState(null);

  // useEffect(() => {
  //   fetch(`http://localhost:3000/posts/${post_id}`, {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((displayPost) => {
  //       console.log(displayPost);
  //       setPost(displayPost);
  //     });
  // }, []);

  return (
    // <Modal>
    //   <Modal.Content image>
    <Card as={Link} to={`/postinfo/${id}`}>
      <Image wrapped size="medium" src={image} alt="Post" />
      {/* <Modal.Description> */}
      <div>
        <p>Date: {date} </p>
        <p>Description: {description}</p>
        <p>Water Type: {water_type}</p>
        <p>Location: {location}</p>
      </div>
      {/* </Modal.Description>
    //   </Modal.Content> */}
      {/* // </Modal> */}
    </Card>
  );
}

export default PostCard;
