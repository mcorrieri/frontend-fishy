import { Card, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";

function UserPosts({ post }) {
  return (
    <Card id="user-post-cards" centered as={Link} to={`/post/${post.id}`}>
      <Image wrapped size="medium" src={post.image} alt="post-image" />
      <Card.Content>
        <div className="card-content">
          <p>{post.description}</p>
          <p>Location: {post.location}</p>
          <p>Date: {post.date}</p>
        </div>
      </Card.Content>
    </Card>
  );
}

export default UserPosts;
