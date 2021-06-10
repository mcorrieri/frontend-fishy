// import { useState, useEffect } from "react";
import { Modal, Image } from "semantic-ui-react";

function PostCard({ post }) {
  const { date, description, image, watertype, location } = post;
  console.log(post);
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
    <div>
      <Image wrapped size="medium" src={image} alt="Post" />
      {/* <Modal.Description> */}
      <div>
        <p>Date: {date} </p>
        <p>Description: {description}</p>
        <p>Water Type: {watertype}</p>
        <p>Location: {location}</p>
      </div>
      {/* </Modal.Description>
    //   </Modal.Content> */}
      {/* // </Modal> */}
    </div>
  );
}

export default PostCard;
