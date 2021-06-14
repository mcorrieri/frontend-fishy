// import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Image, Card } from "semantic-ui-react";

function PostCard({ post, id }) {
  // console.log(post);
  const { date, description, image, water_type, location } = post;

  return (
    // <Modal>
    //   <Modal.Content image>
    <Card as={Link} to={`/post/${id}`}>
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
