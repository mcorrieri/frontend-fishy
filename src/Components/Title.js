import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { Button, Header, Image } from "semantic-ui-react";

function Title({ loggedInUser, setLoggedInUser }) {
  const history = useHistory();

  let logOut = () => {
    localStorage.clear();
    setLoggedInUser(null);
    history.push("/login");
  };

  return (
    <div className="header">
      {/* <Segment> */}
      <Header as="h1">
        <img
          className="logopic"
          src="https://image.posterlounge.com/img/products/660000/659804/659804_poster_l.jpg"
        />
        <Link to="/posts">FISHY</Link>
      </Header>
      <Header as="h3">
        <span className="user-span">
          {loggedInUser ? (
            <p>Keep on fishin, {loggedInUser.username}!</p>
          ) : null}
        </span>
        <div className="button-container">
          <Button id="link" className="user">
            <Link to="/myposts">My Posts</Link>
          </Button>
          <Button id="link" className="user">
            <Link to="/myfish">My Aquarium</Link>
          </Button>
          <Button id="logout" className="logoutbtn" onClick={() => logOut()}>
            Logout
          </Button>
        </div>
      </Header>
      {/* </Segment> */}
    </div>
  );
}

export default Title;
