import { Link } from "react-router-dom";
import { Image, Card } from "semantic-ui-react";

function PostCard({ post, id }) {
  const { date, description, image, location, price, comment } = post;

  return (
    <Card
      id="post-index-card"
      className="ui centered card"
      as={Link}
      to={`/post/${id}`}
    >
      <Image wrapped size="medium" src={image} alt="Post" />
      <Card.Content>
        <div>
          <p>Date: {date} </p>
          <p>Description: {description}</p>
          <p>Location: {location}</p>
          <p>Price: ${price}</p>
          <p>Comment: {comment}</p>
        </div>
      </Card.Content>
    </Card>
  );
}

export default PostCard;
