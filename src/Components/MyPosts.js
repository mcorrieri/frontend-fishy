import { Card } from "semantic-ui-react";
import UserPosts from "./UserPosts";

function MyPosts({ loggedInUser, loggedInUserPosts }) {
  if (loggedInUser) {
    // console.log(loggedInUserPosts);
    let myCards = loggedInUserPosts.map((post) => {
      return <UserPosts key={post.id} post={post} />;
    });

    return <Card.Group>{myCards}</Card.Group>;
  } else {
    return null;
  }
}
export default MyPosts;
