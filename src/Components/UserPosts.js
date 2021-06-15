import { Card, Image } from "semantic-ui-react";

function UserPosts({ post }) {
  return (
    <Card centered>
      <Image wrapped size="medium" src={post.image} alt="post-image" />
      <Card.Content>
        <p>Date: {post.date}</p>
      </Card.Content>
    </Card>
  );
}

export default UserPosts;
