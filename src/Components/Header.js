import { useHistory } from "react-router";
import { Link } from "react-router-dom";

function Header({ loggedInUser, setLoggedInUser }) {
  const history = useHistory();

  let logOut = () => {
    localStorage.clear();
    setLoggedInUser(null);
    history.push("/login");
  };

  return (
    <div>
      <button>Fishy</button>
      <button onClick={() => logOut()}>Logout</button>
      {loggedInUser ? <p>Hello {loggedInUser.username}</p> : null}
      <Link to="/myfish">My Aquarium</Link>
      <h1>Fishy</h1>
    </div>
  );
}

export default Header;
