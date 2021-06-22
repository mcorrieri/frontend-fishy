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
      <div className="logos">
        <img
          className="logopic"
          src="https://fishkeepingguide.net/wp-content/uploads/2020/05/discus-fish.jpg"
        />
        <Link className="logolink" to="/posts">
          FISHY
        </Link>
      </div>
      <div className="headerwrap">
        <Header as="h3">
          <span className="user-span">
            {loggedInUser ? (
              <p>Keep on fishin, {loggedInUser.username}!</p>
            ) : null}
          </span>
          <div className="button-container">
            <Button>
              <Link className="mybtn" to="/myposts">
                My Posts
              </Link>
            </Button>
            <Button>
              <Link className="mybtn" to="/myfish">
                My Aquarium
              </Link>
            </Button>
            <Button id="logout" className="logoutbtn" onClick={() => logOut()}>
              Logout
            </Button>
          </div>
        </Header>
      </div>
      {/* </Segment> */}
    </div>
  );
}

export default Title;
