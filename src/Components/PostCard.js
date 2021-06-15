import { Link } from "react-router-dom";
import { Image, Card } from "semantic-ui-react";

function PostCard({ post, id }) {
  const { date, description, image, water_type, location } = post;

  return (
    <Card className="ui centered card" as={Link} to={`/post/${id}`}>
      <Image wrapped size="medium" src={image} alt="Post" />
      <Card.Content>
        <div>
          <p>Date: {date} </p>
          <p>Description: {description}</p>
          <p>Water Type: {water_type}</p>
          <p>Location: {location}</p>
        </div>
      </Card.Content>
    </Card>
  );
}

export default PostCard;
