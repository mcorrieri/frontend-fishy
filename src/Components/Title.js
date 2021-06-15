import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { Button, Header, Image, Segment } from "semantic-ui-react";

function Title({ loggedInUser, setLoggedInUser }) {
  const history = useHistory();

  let logOut = () => {
    localStorage.clear();
    setLoggedInUser(null);
    history.push("/login");
  };

  return (
    <div className="header">
      <Segment>
        <Header as="h2">
          <Link to="/posts">FISHY</Link>
          <Image
            circular
            size="small"
            src="https://image.posterlounge.com/img/products/660000/659804/659804_poster_l.jpg"
          />
        </Header>
        <Header as="h3" textAlign="right">
          {loggedInUser ? <p>Hello there, {loggedInUser.username}</p> : null}
          <Link to="/myfish">My Aquarium</Link>
          <br></br>
          <Link to="/myposts">My Posts</Link>
          <br></br>
          <Button onClick={() => logOut()}>Logout</Button>
        </Header>
      </Segment>
    </div>
  );
}

export default Title;
