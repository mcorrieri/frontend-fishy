import { Card } from "semantic-ui-react";
import UserPosts from "./UserPosts";

function MyPosts({ loggedInUser, loggedInUserPosts }) {
  if (loggedInUser) {
    // console.log(loggedInUserPosts);
    let myCards = loggedInUserPosts.map((post) => {
      return <UserPosts key={post.id} post={post} />;
    });

    return myCards.length ? (
      <Card.Group>{myCards}</Card.Group>
    ) : (
      <div className="nothing-here">
        <p>You haven't made any posts yet pal!</p>
      </div>
    );
  } else {
    return null;
  }
}
export default MyPosts;
